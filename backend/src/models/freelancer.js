const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.getAllFreelancers = async () => {
  try {
    return await prisma.freelancer.findMany();
  } finally {
    await prisma.$disconnect();
  }
};

exports.findOneFreelancer = async (freelancerId) => {
  try {
    return await prisma.freelancer.findUnique({
      where: { id: freelancerId },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const createOneFreelancer = async (freelancer) => {
  try {
    return await prisma.freelancer.create({
      data: { ...freelancer },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const updateOneFreelancer = async (freelancerId, data) => {
  try {
    const message = await prisma.freelancer.update({
      where: { id: freelancerId },
      data: { ...data },
    });
    return message;
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

module.exports = { createOneFreelancer, updateOneFreelancer, findOneByUserId };
