const { Prisma } = require("@prisma/client");
const { hashPassword } = require("../helpers/argonHelper");
const user = require("../models/user");
const validateUser = require("../utils/validate");

const createOne = async (req, res, next) => {
  const { firstname, lastname, email, password, role } = req.body;
  const completedProfile = role !== "freelancer";
  const error = validateUser({
    firstname,
    lastname,
    email,
    password,
    role,
    profileIsComplete: completedProfile,
  });
  if (error) {
    res.status(422).json(error);
  } else if (role === "freelancer" || role === "employer") {
    try {
      const hashedPassword = await hashPassword(password);
      const message = await user.createOne({
        firstname,
        lastname,
        email,
        hashedPassword: hashedPassword.toString(),
        role,
        profileIsComplete: completedProfile,
      });
      req.userCreated = message;
      next();
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === "P2002") {
          return res.status(409).json({
            erreur: "Cette adresse email est déjà utilisée.",
          });
        }
      }
    }
  }
  return null;
};

const login = async (req, res) => {
  const rememberTime = () => {
    if (req.body.remember) {
      return 604800000;
    }
    return 86400000;
  };
  try {
    const userData = await user.login(req.body);
    if (!userData.code) {
      res
        .status(200)
        .cookie("userToken", userData.accessToken, {
          httpOnly: false,
          expires: new Date(Date.now() + rememberTime()),
        })
        .json({
          message: "Connexion réussie",
          type: userData.role,
        });
    } else {
      res.status(userData.code).json({ message: userData.message });
    }
  } catch (error) {
    console.warn(error);
  }
};

module.exports = { createOne, login };
