const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.getAllFreelancers = async () => {
  try {
    return await prisma.freelancer.findMany();
  } finally {
    await prisma.$disconnect();
  }
};

exports.createOne = async (freelancer) => {
  try {
    return await prisma.freelancer.create({
      data: { ...freelancer },
    });
  } finally {
    await prisma.$disconnect();
  }
};

exports.updateOne = async (freelancerId, data) => {
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
