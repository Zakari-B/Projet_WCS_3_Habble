const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createOneOffer = async (offer) => {
  try {
    return await prisma.annonce_offers.create({
      data: { ...offer },
    });
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = {
  createOneOffer,
};
