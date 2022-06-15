const { Prisma } = require("@prisma/client");
const { hashPassword } = require("../helpers/argonHelper");
const user = require("../models/user");

const createOne = async (req, res) => {
  const { firstname, lastname, email, password, role, profileIsComplete } =
    req.body;
  const error = user.validate(
    { firstname, lastname, email, password, role, profileIsComplete },
    true
  );
  if (error) {
    res.status(422).json(error);
  } else {
    try {
      const hashedPassword = (await hashPassword(password)).toString();
      const message = await user.createOne({
        firstname,
        lastname,
        email,
        hashedPassword,
        role,
        profileIsComplete,
      });
      res.status(201).json(message);
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === "P2002") {
          return res.status(409).json({
            erreur: "Cette adresse email est déjà utilisée",
          });
        }
      }
      throw e;
    }
  }
  return null;
};

module.exports = { createOne };
