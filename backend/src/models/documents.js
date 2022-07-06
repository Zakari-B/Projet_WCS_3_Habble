const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAllDocumentsByFreelancerId = async (freelancerId) => {
  try {
    return await prisma.documents.findMany({
      where: { freelancerId },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getOneDocumentByFreelancerId = async (freelancerId, id) => {
  try {
    return await prisma.documents.findFirst({
      where: { freelancerId, id },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const deleteOneDocument = async (id) => {
  try {
    return await prisma.documents.delete({ where: { id } });
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = {
  getAllDocumentsByFreelancerId,
  getOneDocumentByFreelancerId,
  deleteOneDocument,
};
