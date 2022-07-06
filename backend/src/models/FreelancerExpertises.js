const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAllByFreelancer = async (freelancerId) => {
  try {
    return await prisma.freelancer_expertises.findMany({
      where: { freelancerId },
      include: {
        fk_freelancer_id: true,
        fk_expertise_id: true,
      },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getOneServiceByFreelancerId = async (freelancerId, expertiseId) => {
  try {
    return await prisma.freelancer_expertises.findMany({
      where: { freelancerId, expertiseId },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const createOneByFreelancer = async (data) => {
  try {
    return await prisma.freelancer_expertises.create({
      data,
    });
  } finally {
    await prisma.$disconnect();
  }
};

const deleteOneByFreelancer = async (id) => {
  try {
    return await prisma.freelancer_expertises.delete({
      where: { id },
    });
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = {
  getAllByFreelancer,
  createOneByFreelancer,
  deleteOneByFreelancer,
  getOneServiceByFreelancerId,
};
