const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createOne = async (token) => {
  try {
    return await prisma.token.create({
      data: { ...token },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const findOne = async (userId) => {
  try {
    return await prisma.token.findUnique({
      where: { id: userId },
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
  findOne,
  deleteOne,
};
