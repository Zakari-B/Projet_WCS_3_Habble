const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createOne = async (freelancer) => {
  try {
    return await prisma.freelancer.create({
      data: { ...freelancer },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const updateOne = async (user) => {
  try {
    return await prisma.freelancer.create({
      data: { ...user },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const findOneByUserId = async (user) => {
  try {
    return await prisma.freelancer.findFirst({
      where: { userId: user },
    });
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = { createOne, updateOne, findOneByUserId };
