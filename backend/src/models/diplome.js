const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createOneDiploma = async (diploma) => {
  try {
    return await prisma.diplomes.create({
      data: { ...diploma },
    });
  } finally {
    await prisma.$disconnect();
  }
};

// const getAllDiploma = async () => {
//   try {
//     return await prisma.diplomes.findMany();
//   } finally {
//     await prisma.$disconnect();
//   }
// };

// const getOneDiploma = async (freelancerId) => {
//   try {
//     return await prisma.diplomes.findUnique({
//       where: { id: freelancerId },
//     });
//   } finally {
//     await prisma.$disconnect();
//   }
// };

// const constupdateOneDiploma = async (freelancerId, data) => {
//   try {
//     const message = await prisma.diplomes.update({
//       where: { id: freelancerId },
//       data: { ...data },
//     });
//     return message;
//   } finally {
//     await prisma.$disconnect();
//   }
// };

// const deleteOneDiploma = async (freelancerId, data) => {
//   try {
//     const message = await prisma.diplomes.update({
//       where: { id: freelancerId },
//       data: { ...data },
//     });
//     return message;
//   } finally {
//     await prisma.$disconnect();
//   }
// };

module.exports = {
  //   getAllDiploma,
  //   getOneDiploma,
  createOneDiploma,
  //   constupdateOneDiploma,
  //   deleteOneDiploma,
};
