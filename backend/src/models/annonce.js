const { PrismaClient } = require("@prisma/client");
require("dotenv").config();

const prisma = new PrismaClient();
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DB_HOST, // address of the server
  port: process.env.DB_PORT, // port of the DB server (mysql), not to be confused with the nodeJS server PORT !
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const db = connection.promise();

const getAllAnnouncementsbyCoordinatorId = async (coordinatorId) => {
  try {
    return await prisma.annonce.findMany({
      where: { coordinatorId },
      include: { annonce_offers: true, fk_family_id: true },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getOneAnnouncementByCoordinatorId = async (coordinatorId, id) => {
  try {
    return await prisma.annonce.findMany({
      where: { coordinatorId, id },
      include: {
        fk_family_id: true,
      },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getOneAnnonceWithCity = (annonceId) => {
  return db
    .query(
      `select
      a.id,
      a.title,
      a.description,
      c.ville_nom,
      c.ville_nom_reel,
      c.ville_code_postal,
      c.ville_departement
      from annonce a join city c on a.zipCode =c.ville_code_commune  where a.id =?`,
      [annonceId]
    )
    .then(([results]) => {
      return results;
    });
};

const getAllAnnouncements = async () => {
  try {
    return await prisma.annonce.findMany();
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

const createOneAnnouncement = async (announcement) => {
  try {
    return await prisma.annonce.create({
      data: { ...announcement },
    });
  } finally {
    await prisma.$disconnect();
  }
};

// routes for employer/annonces

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

const updateOneAnnouncementByCoordinatorId = async (
  coordinatorId,
  id,
  data
) => {
  try {
    const annonce = await prisma.annonce.updateMany({
      where: { coordinatorId, id },
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

const deleteOneAnnouncementByCoordinatorId = async (coordinatorId, id) => {
  try {
    return await prisma.annonce.deleteMany({ where: { coordinatorId, id } });
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = {
  getAllAnnouncementsbyEmployerId,
  getAllAnnouncementsbyCoordinatorId,
  getAllAnnouncements,
  createOneAnnouncement,
  getOneAnnouncementByEmployerId,
  getOneAnnouncementByCoordinatorId,
  getOneAnnonceWithCity,
  getOneAnnouncement,
  updateOneAnnouncement,
  updateOneAnnouncementByCoordinatorId,
  deleteOneAnnouncement,
  deleteOneAnnouncementByCoordinatorId,
};
