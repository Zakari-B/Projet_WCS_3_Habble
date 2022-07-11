const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createOneAnnouncement = async (announcement) => {
  try {
    return await prisma.annonce.create({
      data: { ...announcement },
    });
  } finally {
    await prisma.$disconnect();
  }
};
const getAllAnnouncementsbyEmployerId = async (employerId) => {
  try {
    return await prisma.annonce.findMany({
      where: { employerId },
      include: { annonce_offers: true },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getAllAnnouncements = async () => {
  try {
    return await prisma.annonce.findMany();
  } finally {
    await prisma.$disconnect();
  }
};

const getOneAnnouncementByEmployerId = async (employerId, id) => {
  try {
    return await prisma.annonce.findMany({
      where: { employerId, id },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getOneAnnouncement = async (id) => {
  try {
    return await prisma.annonce.findUnique({
      where: { id },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const updateOneAnnouncement = async (employerId, id, data) => {
  try {
    const annonce = await prisma.annonce.updateMany({
      where: { employerId, id },
      data: { ...data },
    });
    return annonce;
  } finally {
    await prisma.$disconnect();
  }
};

const deleteOneAnnouncement = async (employerId, id) => {
  try {
    return await prisma.annonce.deleteMany({ where: { employerId, id } });
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = {
  getAllAnnouncementsbyEmployerId,
  getAllAnnouncements,
  createOneAnnouncement,
  getOneAnnouncementByEmployerId,
  getOneAnnouncement,
  updateOneAnnouncement,
  deleteOneAnnouncement,
};
