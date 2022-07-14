const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAllByCoordinator = async (coordinatorId) => {
  try {
    return await prisma.coordinator_services.findMany({
      where: { coordinatorId },
      include: {
        fk_coordinator_id: true,
        fk_services_id: true,
      },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getOneServiceByCoordinatorId = async (coordinatorId, serviceId) => {
  try {
    return await prisma.coordinator_services.findMany({
      where: { coordinatorId, serviceId },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const createOneByCoordinator = async (data) => {
  try {
    return await prisma.coordinator_services.create({
      data,
    });
  } finally {
    await prisma.$disconnect();
  }
};

const deleteOneByCoordinator = async (id) => {
  try {
    return await prisma.coordinator_services.delete({
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
  getOneServiceByCoordinatorId,
};
