const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createOneDiploma = async (diploma) => {
  try {
    return await prisma.diplomes.create({
      data: { ...diploma },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const createOneDiplomaByCoordinator = async (diploma) => {
  try {
    return await prisma.diplomes_coordinator.create({
      data: { ...diploma },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getAllDiplomabyFreelancerId = async (freelancerId) => {
  try {
    return await prisma.diplomes.findMany({
      where: { freelancerId },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getAllDiplomabyCoordinatorId = async (coordinatorId) => {
  try {
    return await prisma.diplomes_coordinator.findMany({
      where: { coordinatorId },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getOneDiplomabyFreelancerId = async (freelancerId, id) => {
  try {
    return await prisma.diplomes.findFirst({
      where: { freelancerId, id },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getOneDiplomabyCoordinatorId = async (coordinatorId, id) => {
  try {
    return await prisma.diplomes_coordinator.findFirst({
      where: { coordinatorId, id },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const updateOneDiploma = async (id, data) => {
  try {
    const diploma = await prisma.diplomes.update({
      where: { id },
      data: { ...data },
    });
    return diploma;
  } finally {
    await prisma.$disconnect();
  }
};

const updateOneDiplomaByCoordinator = async (id, data) => {
  try {
    const diploma = await prisma.diplomes_coordinator.update({
      where: { id },
      data: { ...data },
    });
    return diploma;
  } finally {
    await prisma.$disconnect();
  }
};

const deleteOneDiploma = async (id) => {
  try {
    return await prisma.diplomes.delete({ where: { id } });
  } finally {
    await prisma.$disconnect();
  }
};

const deleteOneDiplomaByCoordinator = async (id) => {
  try {
    return await prisma.diplomes_coordinator.delete({ where: { id } });
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = {
  getAllDiplomabyFreelancerId,
  getAllDiplomabyCoordinatorId,
  getOneDiplomabyFreelancerId,
  getOneDiplomabyCoordinatorId,
  createOneDiploma,
  createOneDiplomaByCoordinator,
  updateOneDiploma,
  updateOneDiplomaByCoordinator,
  deleteOneDiploma,
  deleteOneDiplomaByCoordinator,
};
