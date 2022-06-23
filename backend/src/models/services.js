const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.createOneService = async (service) => {
  try {
    return await prisma.services.create({
      data: { ...service },
    });
  } finally {
    await prisma.$disconnect();
  }
};
