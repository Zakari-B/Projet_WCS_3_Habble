const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createOneOffer = async (offer) => {
  try {
    return await prisma.annonce_offers.create({
      data: { ...offer },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getAllOffers = async () => {
  try {
    return await prisma.annonce_offers.findMany();
  } finally {
    await prisma.$disconnect();
  }
};

const getAllForOneAnnonce = async (annonceId) => {
  try {
    return await prisma.annonce_offers.findMany({
      where: { annonceId },
      include: { freelancer: { select: { displayName: true, picture: true } } },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getOneOfferForOneAnnonceAndFreelancer = async (
  freelancerId,
  annonceId
) => {
  try {
    return await prisma.annonce_offers.findMany({
      where: { annonceId, freelancerId },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getOneOffer = async (id) => {
  try {
    return await prisma.annonce_offers.findUnique({
      where: { id },
      include: { freelancer: { select: { displayName: true, picture: true } } },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const updateOneOffer = async (id, data) => {
  try {
    return await prisma.annonce_offers.update({
      where: { id },
      data: { ...data },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const deleteOneOffer = async (id) => {
  try {
    return await prisma.annonce_offers.delete({ where: { id } });
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = {
  createOneOffer,
  getAllOffers,
  getAllForOneAnnonce,
  getOneOfferForOneAnnonceAndFreelancer,
  getOneOffer,
  updateOneOffer,
  deleteOneOffer,
};
