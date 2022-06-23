const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createOneFormation = async (formation) => {
  try {
    return await prisma.formations.create({
      data: { ...formation },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getAllFormationbyFreelancerId = async (freelancerId) => {
  try {
    return await prisma.formations.findMany({
      where: { freelancerId },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getOneFormationbyFreelancerId = async (freelancerId, id) => {
  try {
    return await prisma.formations.findFirst({
      where: { freelancerId, id },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const updateOneFormation = async (id, data) => {
  try {
    const formation = await prisma.formations.update({
      where: { id },
      data: { ...data },
    });
    return formation;
  } finally {
    await prisma.$disconnect();
  }
};

const deleteOneFormation = async (id) => {
  try {
    return await prisma.formations.delete({ where: { id } });
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = {
  getAllFormationbyFreelancerId,
  getOneFormationbyFreelancerId,
  createOneFormation,
  updateOneFormation,
  deleteOneFormation,
};
