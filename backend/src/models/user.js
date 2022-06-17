const { PrismaClient } = require("@prisma/client");

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
module.exports = { createOne };
