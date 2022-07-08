const { PrismaClient } = require("@prisma/client");
const jwt = require("../helpers/jwtHelper");
const argon = require("../helpers/argonHelper");
const { findOneFreelancerByUserId } = require("./freelancer");
const { findOneEmployerByUserId } = require("./employer");
const { findOneCoordinatorByUserId } = require("./coordinator");

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

  let fkId = "";
  if (user.role === "freelancer") {
    fkId = await findOneFreelancerByUserId(user.id);
    fkId = fkId.id;
  } else if (user.role === "employer") {
    fkId = await findOneEmployerByUserId(user.id);
    fkId = fkId.id;
  } else if (user.role === "coordinator") {
    fkId = await findOneCoordinatorByUserId(user.id);
    fkId = fkId.id;
  }

  const accessToken = await jwt.signAccessToken({
    user,
    fkId,
  });
  return { ...user, fkId, accessToken };
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
      include: { freelancer: true },
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
  createOne,
  login,
  updateOne,
  deleteOne,
  findOne,
  findAll,
};
