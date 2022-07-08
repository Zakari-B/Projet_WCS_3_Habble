const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAllByAnnonce = async (annonceId) => {
  try {
    return await prisma.annonce_lieu.findMany({
      where: { annonceId },
      include: {
        fk_annonce_id: true,
        fk_lieu_id: true,
      },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getAll = async () => {
  try {
    return await prisma.annonce_lieu.findMany();
  } finally {
    await prisma.$disconnect();
  }
};

const getOneLocationByAnnonceId = async (annonceId, locationId) => {
  try {
    return await prisma.annonce_lieu.findMany({
      where: { annonceId, locationId },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const createOneByAnnonce = async (data) => {
  try {
    return await prisma.annonce_lieu.createMany({
      data,
    });
  } finally {
    await prisma.$disconnect();
  }
};

const deleteOneByAnnonce = async (id) => {
  try {
    return await prisma.annonce_lieu.delete({
      where: { id },
    });
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = {
  getAllByAnnonce,
  getAll,
  createOneByAnnonce,
  getOneLocationByAnnonceId,
  deleteOneByAnnonce,
};
