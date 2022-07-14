const { PrismaClient } = require("@prisma/client");

require("dotenv").config();
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DB_HOST, // address of the server
  port: process.env.DB_PORT, // port of the DB server (mysql), not to be confused with the nodeJS server PORT !
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const db = connection.promise();

const prisma = new PrismaClient();

exports.getAllCoordinators = async () => {
  try {
    return await prisma.coordinator.findMany();
  } finally {
    await prisma.$disconnect();
  }
};

exports.findOneCoordinatorByUserId = async (id) => {
  try {
    return await prisma.coordinator.findUnique({
      where: { userId: id },
    });
  } finally {
    await prisma.$disconnect();
  }
};
exports.findOneCoordinator = async (coordinatorid) => {
  try {
    return await prisma.coordinator.findUnique({
      where: { id: coordinatorid },
    });
  } finally {
    await prisma.$disconnect();
  }
};

exports.createOneCoordinator = async (coordinator) => {
  try {
    return await prisma.coordinator.create({
      data: { ...coordinator },
    });
  } finally {
    await prisma.$disconnect();
  }
};

exports.updateOneCoordinator = async (coordinatorId, data) => {
  try {
    const message = await prisma.coordinator.update({
      where: { id: coordinatorId },
      data: { ...data },
    });
    return message;
  } finally {
    await prisma.$disconnect();
  }
};

exports.getAllCoordinatorsProfileInfo = async (coordinatorid) => {
  try {
    return await prisma.coordinator.findUnique({
      where: {
        id: coordinatorid,
      },
    });
  } finally {
    await prisma.$disconnect();
  }
};

exports.getUserFromCoordinator = async (userId) => {
  try {
    return await prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        coordinator: true,
      },
    });
  } finally {
    await prisma.$disconnect();
  }
};

exports.getOneCoordinatorWithCity = (coordinatorId) => {
  return db
    .query(
      `select 
      co.id,
      co.displayName,
      co.activityDescription,
      co.zipCode,
      co.acceptEmails,
      c.ville_nom,
      c.ville_nom_reel,
      c.ville_code_postal,
      c.ville_departement
      from coordinator co 
      join city c on co.zipCode = c.ville_code_commune where co.id =?`,
      [coordinatorId]
    )
    .then(([results]) => {
      return results;
    });
};
