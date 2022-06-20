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
    return {
      code: 401,
      message: "Les informations sont incorrectes ou le compte n'existe pas.",
    };
  }
  const checkPassword = await argon.verifyPassword(
    password,
    user.hashedPassword
  );
  if (!checkPassword) {
    return {
      code: 401,
      message: "Les informations sont incorrectes ou le compte n'existe pas.",
    };
  }
  delete user.hashedPassword;
  const accessToken = await jwt.signAccessToken(user);
  return { ...user, accessToken };
};

const findAll = async () => {
  try {
    return await prisma.user.findMany();
  } finally {
    await prisma.$disconnect();
  }
};

const findOne = async (userId) => {
  try {
    return await prisma.user.findUnique({
      where: { id: userId },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const updateOne = async (userId, payload) => {
  try {
    return await prisma.user.update({
      where: { id: userId },
      data: payload,
    });
  } finally {
    await prisma.$disconnect();
  }
};

const deleteOne = async (userId) => {
  try {
    return await prisma.user.delete({
      where: { id: userId },
    });
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = {
  validate,
  createOne,
  login,
  updateOne,
  deleteOne,
  findOne,
  findAll,
};
