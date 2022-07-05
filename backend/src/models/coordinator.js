const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.getAllCoordinators = async () => {
  try {
    return await prisma.coordinator.findMany();
  } finally {
    await prisma.$disconnect();
  }
};

exports.findOneCoordinatorByUserId = async (id) => {
  try {
    return await prisma.coordinator.findUnique({
      where: { userId: id },
    });
  } finally {
    await prisma.$disconnect();
  }
};
exports.findOneCoordinator = async (coordinatorId) => {
  try {
    return await prisma.coordinator.findUnique({
      where: { id: coordinatorId },
    });
  } finally {
    await prisma.$disconnect();
  }
};

exports.createOneCoordinator = async (coordinator) => {
  try {
    return await prisma.coordinator.create({
      data: { ...coordinator },
    });
  } finally {
    await prisma.$disconnect();
  }
};

exports.updateOneCoordinator = async (coordinatorId, data) => {
  try {
    const message = await prisma.coordinator.update({
      where: { id: coordinatorId },
      data: { ...data },
    });
    return message;
  } finally {
    await prisma.$disconnect();
  }
};

exports.getAllCoordinatorProfileInfo = async (coordinatorId) => {
  try {
    return await prisma.coordinator.findUnique({
      where: {
        id: coordinatorId,
      },
      include: {
        diplomes: {
          orderBy: {
            dateCreated: "desc",
          },
        },
        formations: {
          orderBy: {
            dateCreated: "desc",
          },
        },
        experience_pro: {
          orderBy: {
            dateCreated: "desc",
          },
        },
      },
    });
  } finally {
    await prisma.$disconnect();
  }
};

exports.getUserFromCoordinator = async (userId) => {
  try {
    return await prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        freelancer: true,
      },
    });
  } finally {
    await prisma.$disconnect();
  }
};
