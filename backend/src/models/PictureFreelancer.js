const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.updateOnePictureFreelancer = async ({ freelancerId, picture }) => {
  try {
    const message = await prisma.freelancer.update({
      where: { id: freelancerId },
      data: { picture },
    });
    return message;
  } finally {
    await prisma.$disconnect();
  }
};

// exports.deleteOne = async (id) => {
//   try {
//     return await prisma.documents.delete({ where: { id } });
//   } finally {
//     await prisma.$disconnect();
//   }
// };
