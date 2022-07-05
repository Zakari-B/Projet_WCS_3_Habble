const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createOneService = async (service) => {
  try {
    return await prisma.services.create({
      data: { ...service },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getAllService = async () => {
  try {
    return await prisma.services.findMany();
  } finally {
    await prisma.$disconnect();
  }
};

const getOneService = async (id) => {
  try {
    return await prisma.services.findFirst({
      where: { id },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const updateOneService = async (id, data) => {
  try {
    const diploma = await prisma.services.update({
      where: { id },
      data: { ...data },
    });
    return diploma;
  } finally {
    await prisma.$disconnect();
  }
};

const deleteOneService = async (id) => {
  try {
    return await prisma.services.delete({ where: { id } });
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = {
  getAllService,
  getOneService,
  createOneService,
  updateOneService,
  deleteOneService,
};
