const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAllByAnnonce = async (annonceId) => {
  try {
    return await prisma.annonce_services.findMany({
      where: { annonceId },
      include: {
        fk_annonce_id: true,
        fk_service_id: true,
      },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getOneServiceByAnnonceId = async (annonceId, serviceId) => {
  try {
    return await prisma.annonce_services.findMany({
      where: { annonceId, serviceId },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const createOneByAnnonce = async (data) => {
  try {
    return await prisma.annonce_services.createMany({
      data,
    });
  } finally {
    await prisma.$disconnect();
  }
};

const deleteOneByAnnonce = async (id) => {
  try {
    return await prisma.annonce_services.delete({
      where: { id },
    });
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = {
  getAllByAnnonce,
  createOneByAnnonce,
  deleteOneByAnnonce,
  getOneServiceByAnnonceId,
};
