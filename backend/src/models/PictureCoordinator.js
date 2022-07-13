const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.updateOnePictureCoordinator = async ({ coordinatorId, picture }) => {
  try {
    const message = await prisma.coordinator.update({
      where: { id: coordinatorId },
      data: { picture },
    });
    return message;
  } finally {
    await prisma.$disconnect();
  }
};
