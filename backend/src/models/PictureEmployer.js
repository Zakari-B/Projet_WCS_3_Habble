const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.updateOnePictureEmployer = async ({ employerId, picture }) => {
  try {
    const message = await prisma.employer.update({
      where: { id: employerId },
      data: { picture },
    });
    return message;
  } finally {
    await prisma.$disconnect();
  }
};
