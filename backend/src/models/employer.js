const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.createOneEmployer = async (employer) => {
  try {
    return await prisma.employer.create({
      data: { ...employer },
    });
  } finally {
    await prisma.$disconnect();
  }
};

exports.findOneEmployer = async (employerId) => {
  try {
    return await prisma.employer.findUnique({
      where: { id: employerId },
      include: { fk_user_id: { select: { isAdmin: true } } },
    });
  } finally {
    await prisma.$disconnect();
  }
};

exports.getAllEmployers = async () => {
  try {
    return await prisma.employer.findMany();
  } finally {
    await prisma.$disconnect();
  }
};

exports.updateOneEmployer = async (employerId, data) => {
  try {
    const message = await prisma.employer.update({
      where: { id: employerId },
      data: { ...data },
    });
    return message;
  } finally {
    await prisma.$disconnect();
  }
};

exports.findOneEmployerByUserId = async (id) => {
  try {
    return await prisma.employer.findUnique({
      where: { userId: id },
    });
  } finally {
    await prisma.$disconnect();
  }
};

exports.getUserFromEmployer = async (userId) => {
  try {
    return await prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        employer: true,
      },
    });
  } finally {
    await prisma.$disconnect();
  }
};

exports.getAllEmployerProfileInfo = async (employerId) => {
  try {
    return await prisma.employer.findUnique({
      where: {
        id: employerId,
      },
    });
  } finally {
    await prisma.$disconnect();
  }
};
