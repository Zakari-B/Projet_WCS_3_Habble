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

const getAllExperiencebyFreelancerId = async (freelancerId) => {
  try {
    return await prisma.experience_pro.findMany({
      where: { freelancerId },
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

const deleteOneExperience = async (id) => {
  try {
    return await prisma.experience_pro.delete({ where: { id } });
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = {
  getAllExperiencebyFreelancerId,
  getOneExperiencebyFreelancerId,
  createOneExperience,
  updateOneExperience,
  deleteOneExperience,
};
