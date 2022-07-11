const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.getAll = async () => {
  try {
    return await prisma.documents.findMany();
  } finally {
    await prisma.$disconnect();
  }
};

// exports.getAllByFamilyid = async (familyId) => {
//   try {
//     return await prisma.documents.findMany({ where: familyId });
//   } finally {
//     await prisma.$disconnect();
//   }
// };

exports.createOne = async (img) => {
  try {
    return await prisma.documents.create({
      data: img,
    });
  } finally {
    await prisma.$disconnect();
  }
};

exports.deleteOne = async (id) => {
  try {
    return await prisma.documents.delete({ where: { id } });
  } finally {
    await prisma.$disconnect();
  }
};
