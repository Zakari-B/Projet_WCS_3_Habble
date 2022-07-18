const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAllByCoordinator = async (coordinatorId) => {
  try {
    return await prisma.coordinator_expertises.findMany({
      where: { coordinatorId },
      include: {
        fk_coordinator_id: true,
        fk_expertise_id: true,
      },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getOneExpertiseByCoordinator = async (coordinatorId, expertiseId) => {
  try {
    return await prisma.coordinator_expertises.findMany({
      where: { coordinatorId, expertiseId },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const createOneByCoordinator = async (data) => {
  try {
    return await prisma.coordinator_expertises.create({
      data,
    });
  } finally {
    await prisma.$disconnect();
  }
};

const deleteOneByCoordinator = async (id) => {
  try {
    return await prisma.coordinator_expertises.delete({
      where: { id },
    });
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = {
  getAllByCoordinator,
  createOneByCoordinator,
  deleteOneByCoordinator,
  getOneExpertiseByCoordinator,
};
