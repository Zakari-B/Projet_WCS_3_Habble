const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createOneAnnouncement = async (announcement, employerId) => {
  try {
    return await prisma.annonce.create({
      where: employerId,
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

const deleteOneAnnouncement = async (id) => {
  try {
    return await prisma.annonce.delete({ where: { id } });
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = {
  getAllAnnouncementsbyEmployerId,
  getAllAnnouncements,
  createOneAnnouncement,
  getOneAnnouncementByEmployerId,
  updateOneAnnouncement,
  deleteOneAnnouncement,
};
