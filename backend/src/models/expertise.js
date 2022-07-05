const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createOneExpertise = async (expertise) => {
  try {
    return await prisma.expertises.create({
      data: { ...expertise },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getAllExpertise = async () => {
  try {
    return await prisma.expertises.findMany();
  } finally {
    await prisma.$disconnect();
  }
};

const getOneExpertise = async (id) => {
  try {
    return await prisma.expertises.findFirst({
      where: { id },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const updateOneExpertise = async (id, data) => {
  try {
    const diploma = await prisma.expertises.update({
      where: { id },
      data: { ...data },
    });
    return diploma;
  } finally {
    await prisma.$disconnect();
  }
};

const deleteOneExpertise = async (id) => {
  try {
    return await prisma.expertises.delete({ where: { id } });
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = {
  getAllExpertise,
  getOneExpertise,
  createOneExpertise,
  updateOneExpertise,
  deleteOneExpertise,
};
