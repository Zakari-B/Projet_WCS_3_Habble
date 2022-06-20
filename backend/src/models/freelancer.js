const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.getAllFreelancers = async () => {
  try {
    return await prisma.freelancer.findMany();
  } finally {
    await prisma.$disconnect();
  }
};

exports.findOneFreelancerByUserId = async (id) => {
  try {
    return await prisma.freelancer.findUnique({
      where: { userId: id },
    });
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

exports.createOneFreelancer = async (freelancer) => {
  try {
    return await prisma.freelancer.create({
      data: { ...freelancer },
    });
  } finally {
    await prisma.$disconnect();
  }
};

exports.updateOneFreelancer = async (freelancerId, data) => {
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
