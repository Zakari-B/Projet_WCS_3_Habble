const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createOneLocation = async (location) => {
  try {
    return await prisma.lieu.create({
      data: { ...location },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getAllLocations = async () => {
  try {
    return await prisma.lieu.findMany();
  } finally {
    await prisma.$disconnect();
  }
};

const getOneLocation = async (locationId) => {
  try {
    return await prisma.lieu.findUnique({
      where: { id: locationId },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const updateOneLocation = async (id, data) => {
  try {
    const location = await prisma.lieu.update({
      where: { id },
      data: { ...data },
    });
    return location;
  } finally {
    await prisma.$disconnect();
  }
};

const deleteOneLocation = async (id) => {
  try {
    return await prisma.lieu.delete({ where: { id } });
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = {
  createOneLocation,
  getAllLocations,
  getOneLocation,
  updateOneLocation,
  deleteOneLocation,
};
