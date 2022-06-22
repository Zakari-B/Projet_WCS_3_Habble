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

const findOneEmployerByUserId = async (id) => {
  try {
    return await prisma.employer.findUnique({
      where: { userId: id },
    });
  } finally {
    await prisma.$disconnect();
  }
};
module.exports = { createOne, updateOne, findOneEmployerByUserId };
