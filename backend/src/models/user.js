const { PrismaClient } = require("@prisma/client");
const jwt = require("../helpers/jwtHelper");
const argon = require("../helpers/argonHelper");

const prisma = new PrismaClient();

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

module.exports = { createOne, login };
