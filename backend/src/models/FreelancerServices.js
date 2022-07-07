const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAllByFreelancer = async (freelancerId) => {
  try {
    return await prisma.freelancer_services.findMany({
      where: { freelancerId },
      include: {
        fk_freelancer_id: true,
        fk_services_id: true,
      },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getOneServiceByFreelancerId = async (freelancerId, serviceId) => {
  try {
    return await prisma.freelancer_services.findMany({
      where: { freelancerId, serviceId },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const createOneByFreelancer = async (data) => {
  try {
    return await prisma.freelancer_services.create({
      data,
    });
  } finally {
    await prisma.$disconnect();
  }
};

const deleteOneByFreelancer = async (id) => {
  try {
    return await prisma.freelancer_services.delete({
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
