const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createOneFamily = async (family) => {
  try {
    return await prisma.family.create({
      data: { ...family },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getAllFamilybyCoordinatorId = async (coordinatorId) => {
  try {
    return await prisma.family.findMany({
      where: { coordinatorId },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getOneFamilybyCoordinatorId = async (coordinatorId, id) => {
  try {
    return await prisma.family.findFirst({
      where: { coordinatorId, id },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const updateOneFamily = async (id, data) => {
  try {
    const family = await prisma.family.update({
      where: { id },
      data: { ...data },
    });
    return family;
  } finally {
    await prisma.$disconnect();
  }
};

const deleteOneFamily = async (id) => {
  try {
    return await prisma.family.delete({ where: { id } });
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = {
  getAllFamilybyCoordinatorId,
  getOneFamilybyCoordinatorId,
  createOneFamily,
  updateOneFamily,
  deleteOneFamily,
};
