const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.updateOnePictureFreelancer = async ({ freelancerId, picture }) => {
  try {
    const message = await prisma.freelancer.update({
      where: { id: freelancerId },
      data: { picture },
    });
    return message;
  } finally {
    await prisma.$disconnect();
  }
};
