const Joi = require("joi");
const { PrismaClient } = require("@prisma/client");
const jwt = require("../helpers/jwtHelper");
const argon = require("../helpers/argonHelper");

const prisma = new PrismaClient();

const validate = (data, forCreation = true) => {
  const presence = forCreation ? "required" : "optional";
  const validationErrors = Joi.object({
    firstname: Joi.string().min(3).max(100).presence(presence),
    lastname: Joi.string().max(100).presence(presence),
    email: Joi.string().email().max(100).presence(presence),
    password: Joi.string().min(8).max(255).presence(presence),
    role: Joi.string().max(100).presence(presence),
    profileIsComplete: Joi.boolean().presence(presence),
  }).validate(data, { abortEarly: false }).error;
  if (validationErrors) {
    return validationErrors;
  }
  return false;
};

const createOne = async (user) => {
  try {
    return await prisma.user.create({
      data: { ...user },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const login = async (userData) => {
  const { email, password } = userData;
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (!user) {
    return { code: 401, message: "L'utilisateur n'existe pas" };
  }
  const checkPassword = await argon.verifyPassword(
    password,
    user.hashedPassword
  );
  if (!checkPassword) {
    return { code: 401, message: "Le mot de passe est incorrect" };
  }
  delete user.hashedPassword;
  const accessToken = await jwt.signAccessToken(user);
  return { ...user, accessToken };
};

module.exports = { validate, createOne, login };
