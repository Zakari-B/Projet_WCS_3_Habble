const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createOneExperience = async (experience) => {
  try {
    return await prisma.experience_pro.create({
      data: { ...experience },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const createOneExperienceByCoordinator = async (experience) => {
  try {
    return await prisma.experience_pro_coordinator.create({
      data: { ...experience },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getAllExperiencebyFreelancerId = async (freelancerId) => {
  try {
    return await prisma.experience_pro.findMany({
      where: { freelancerId },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getAllExperiencebyCoordinatorId = async (coordinatorId) => {
  try {
    return await prisma.experience_pro_coordinator.findMany({
      where: { coordinatorId },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getOneExperiencebyFreelancerId = async (freelancerId, id) => {
  try {
    return await prisma.experience_pro.findFirst({
      where: { freelancerId, id },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getOneExperiencebyCoordinatorId = async (coordinatorId, id) => {
  try {
    return await prisma.experience_pro_coordinator.findFirst({
      where: { coordinatorId, id },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const updateOneExperience = async (id, data) => {
  try {
    const experience = await prisma.experience_pro.update({
      where: { id },
      data: { ...data },
    });
    return experience;
  } finally {
    await prisma.$disconnect();
  }
};

const updateOneExperienceByCoordinator = async (id, data) => {
  try {
    const experience = await prisma.experience_pro_coordinator.update({
      where: { id },
      data: { ...data },
    });
    return experience;
  } finally {
    await prisma.$disconnect();
  }
};

const deleteOneExperience = async (id) => {
  try {
    return await prisma.experience_pro.delete({ where: { id } });
  } finally {
    await prisma.$disconnect();
  }
};

const deleteOneExperienceByCoordinator = async (id) => {
  try {
    return await prisma.experience_pro_coordinator.delete({ where: { id } });
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = {
  getAllExperiencebyFreelancerId,
  getAllExperiencebyCoordinatorId,
  getOneExperiencebyFreelancerId,
  getOneExperiencebyCoordinatorId,
  createOneExperience,
  createOneExperienceByCoordinator,
  updateOneExperience,
  updateOneExperienceByCoordinator,
  deleteOneExperience,
  deleteOneExperienceByCoordinator,
};
