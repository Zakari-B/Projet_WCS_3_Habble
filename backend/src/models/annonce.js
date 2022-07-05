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

const getOneAnnouncement = async (id) => {
  try {
    return await prisma.annonce.findUnique({
      where: { id },
    });
  } finally {
    await prisma.$disconnect();
  }
};

// const updateOneDiploma = async (id, data) => {
//   try {
//     const diploma = await prisma.diplomes.update({
//       where: { id },
//       data: { ...data },
//     });
//     return diploma;
//   } finally {
//     await prisma.$disconnect();
//   }
// };

// const deleteOneDiploma = async (id) => {
//   try {
//     return await prisma.diplomes.delete({ where: { id } });
//   } finally {
//     await prisma.$disconnect();
//   }
// };

module.exports = {
  getAllAnnouncementsbyEmployerId,
  getAllAnnouncements,
  createOneAnnouncement,
  getOneAnnouncementByEmployerId,
  getOneAnnouncement,
  //   updateOneDiploma,
  //   deleteOneDiploma,
};
