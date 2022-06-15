const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createOne = async (employer) => {
  try {
    return await prisma.employer.create({
      data: { ...employer },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const updateOne = async (employer) => {
  try {
    return await prisma.employer.create({
      data: { ...employer },
    });
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = { createOne, updateOne };
