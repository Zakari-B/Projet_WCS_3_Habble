const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createOneDiploma = async (diploma) => {
  try {
    return await prisma.diplomes.create({
      data: { ...diploma },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getAllDiplomabyFreelancerId = async (freelancerId) => {
  try {
    return await prisma.diplomes.findMany({
      where: { freelancerId },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getOneDiplomabyFreelancerId = async (freelancerId, id) => {
  try {
    return await prisma.diplomes.findFirst({
      where: { freelancerId, id },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const updateOneDiploma = async (id, data) => {
  try {
    const diploma = await prisma.diplomes.update({
      where: { id },
      data: { ...data },
    });
    return diploma;
  } finally {
    await prisma.$disconnect();
  }
};

const deleteOneDiploma = async (id) => {
  try {
    return await prisma.diplomes.delete({ where: { id } });
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = {
  getAllDiplomabyFreelancerId,
  getOneDiplomabyFreelancerId,
  createOneDiploma,
  updateOneDiploma,
  deleteOneDiploma,
};
