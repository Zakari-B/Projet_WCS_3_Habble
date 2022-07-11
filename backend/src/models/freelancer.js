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

exports.getAllFreelancers = async () => {
  try {
    return await prisma.freelancer.findMany();
  } finally {
    await prisma.$disconnect();
  }
};

exports.findOneFreelancerByUserId = async (id) => {
  try {
    return await prisma.freelancer.findUnique({
      where: { userId: id },
    });
  } finally {
    await prisma.$disconnect();
  }
};
exports.findOneFreelancer = async (freelancerid) => {
  try {
    return await prisma.freelancer.findUnique({
      where: { id: freelancerid },
    });
  } finally {
    await prisma.$disconnect();
  }
};

exports.findOneFreelancerByUserId = async (id) => {
  try {
    return await prisma.freelancer.findUnique({
      where: { userId: id },
    });
  } finally {
    await prisma.$disconnect();
  }
};
exports.createOneFreelancer = async (freelancer) => {
  try {
    return await prisma.freelancer.create({
      data: { ...freelancer },
    });
  } finally {
    await prisma.$disconnect();
  }
};

exports.updateOneFreelancer = async (freelancerId, data) => {
  try {
    const message = await prisma.freelancer.update({
      where: { id: freelancerId },
      data: { ...data },
    });
    return message;
  } finally {
    await prisma.$disconnect();
  }
};

exports.getAllFreelancersProfileInfo = async (freelancerid) => {
  try {
    return await prisma.freelancer.findUnique({
      where: {
        id: freelancerid,
      },
      include: {
        diplomes: {
          orderBy: {
            dateCreated: "desc",
          },
        },
        formations: {
          orderBy: {
            dateCreated: "desc",
          },
        },
        experience_pro: {
          orderBy: {
            dateCreated: "desc",
          },
        },
      },
    });
  } finally {
    await prisma.$disconnect();
  }
};

exports.getOneFreelancerWithCity = (freelancerid) => {
  return db
    .query(
      `select 
      f.id,
      f.displayName,
      f.activityDescription,
      f.zipCode,
      f.acceptEmails,
      f.available ,
      c.ville_nom,
      c.ville_nom_reel,
      c.ville_code_postal,
      c.ville_departement
      from freelancer f 
      join city c on f.zipCode = c.ville_code_commune where f.id =?`,
      [freelancerid]
    )
    .then(([results]) => {
      return results;
    });
};

exports.getUserfromfreelancer = async (userId) => {
  try {
    return await prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        freelancer: true,
      },
    });
  } finally {
    await prisma.$disconnect();
  }
};

exports.getAllFreelancersWithinDist = (dist, cityCode) => {
  return db
    .query(
      `select f.*,fc.distanceInMeters,fc.ville_nom
      from freelancer f 
      join (
        SELECT * FROM (
          SELECT
          ville_id,
          ville_nom,
          ville_code_postal,
          ville_code_commune,
          (
            ST_distance_sphere(city_geo_point, (select city_geo_point from city where ville_code_commune = ?))
          ) AS distanceInMeters
          FROM city
          ORDER BY distanceInMeters ASC
        ) as result
        WHERE result.distanceInMeters < ?
      ) as fc on f.zipCode = fc.ville_code_commune`,
      [cityCode, dist]
    )
    .then(([results]) => {
      return results;
    });
};
