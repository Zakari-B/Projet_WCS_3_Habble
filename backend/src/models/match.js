const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createOneMatchFreelancer = async (match) => {
  try {
    return await prisma.annonce_match_freelancer.create({
      data: { ...match },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getAllMatchForAFreelancer = async (freelancerId) => {
  try {
    return await prisma.annonce_match_freelancer.findMany({
      where: freelancerId,
      include: {
        fk_annonce_id: {
          include: {
            annonce_offers: true,
          },
        },
      },
    });
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = {
  createOneMatchFreelancer,
  getAllMatchForAFreelancer,
};
