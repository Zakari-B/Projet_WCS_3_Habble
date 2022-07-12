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

const getAllDocumentsByCoordinatorId = async (coordinatorId) => {
  try {
    return await prisma.documents.findMany({
      where: { coordinatorId },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getAllDocumentsByCooordinatorIdAndFamilyId = async (
  coordinatorId,
  familyId
) => {
  try {
    return await prisma.documents.findMany({
      where: { coordinatorId, familyId },
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

const getOneDocumentByCoordinatorId = async (coordinatorId, id) => {
  try {
    return await prisma.documents.findFirst({
      where: { coordinatorId, id },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getOneDocumentByCoordinatorIdAndFamilyId = async (
  coordinatorId,
  familyId,
  id
) => {
  try {
    return await prisma.documents.findFirst({
      where: { coordinatorId, familyId, id },
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
  getAllDocumentsByCoordinatorId,
  getAllDocumentsByCooordinatorIdAndFamilyId,
  getOneDocumentByFreelancerId,
  getOneDocumentByCoordinatorId,
  getOneDocumentByCoordinatorIdAndFamilyId,
  deleteOneDocument,
};
