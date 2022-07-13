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

const findOne = async (tokenUserId) => {
  try {
    return await prisma.token.findUnique({
      where: { userId: tokenUserId },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const deleteOne = async (tokenUserId) => {
  try {
    return await prisma.token.delete({
      where: { userId: tokenUserId },
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
