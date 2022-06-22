const { Prisma } = require("@prisma/client");
const { hashPassword, verifyPassword } = require("../helpers/argonHelper");
const user = require("../models/user");
const { validateUser } = require("../utils/validate");

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
          fkId: userData.fkId,
        });
    } else {
      res.status(userData.code).json({ message: userData.message });
    }
  } catch (error) {
    console.warn(error);
  }
};

const getAll = async (req, res) => {
  const result = await user.findAll();
  const newResults = result.map((elem) => ({
    id: elem.id,
    firstname: elem.firstname,
    lastname: elem.lastname,
    email: elem.email,
    role: elem.role,
    profileIsComplete: elem.profileIsComplete,
    dateCreated: elem.dateCreated,
  }));
  res.status(200).json(newResults);
};

const logout = (req, res) => {
  res.clearCookie("userToken").sendStatus(200);
};

const getOne = async (req, res) => {
  const userId = parseInt(req.params.id, 10);

  const result = await user.findOne(userId);

  if (result) {
    delete result.hashedPassword;
    res.status(200).json({ result });
  } else {
    res.status(404).json({ Erreur: "L'utilisateur n'existe pas" });
  }
};

const updateOne = async (req, res) => {
  if (req.body.passwordChangeRequest) {
    const userToVerify = await user.findOne(req.userId);
    const currentPasswordTest = await verifyPassword(
      req.body.passwordChangeRequest.currentPassword,
      userToVerify.hashedPassword
    );
    if (!currentPasswordTest) {
      return res.status(401).send("Mot de passe incorrect");
    }
    const newHashedPassword = await hashPassword(
      req.body.passwordChangeRequest.newPassword
    );
    delete req.body.passwordChangeRequest;
    const result = await user.updateOne(req.userId, {
      hashedPassword: `${newHashedPassword}`,
    });
    if (result) {
      // delete result.hashedPassword;
      res.status(200).json({ "Utilisateur mis jour :": { result } });
    } else {
      res.status(404).json({ Erreur: "L'utilisateur n'existe pas" });
    }
  } else if (req.body.password) {
    req.body.hashedPassword = await hashPassword(req.body.password);
    delete req.body.password;
    const result = await user.updateOne(req.userId, req.body);
    if (result) {
      delete result.hashedPassword;
      res.status(200).json({ "Utilisateur mis jour :": { result } });
    } else {
      res.status(404).json({ Erreur: "L'utilisateur n'existe pas" });
    }
  } else {
    const result = await user.updateOne(req.userId, req.body);
    if (result) {
      delete result.hashedPassword;
      res.status(200).json({ "Utilisateur mis jour :": { result } });
    } else {
      res.status(404).json({ Erreur: "L'utilisateur n'existe pas" });
    }
  }
  return null;
};

const deleteOne = async (req, res) => {
  const userId = parseInt(req.params.id, 10);

  const result = await user.deleteOne(userId);
  if (result) {
    delete result.hashedPassword;
    res.status(200).json({ "Utilisateur supprimé :": { result } });
  } else {
    res.status(404).json({ Erreur: "L'utilisateur n'existe pas" });
  }
};

module.exports = {
  createOne,
  login,
  logout,
  getAll,
  getOne,
  updateOne,
  deleteOne,
};
