const { Prisma } = require("@prisma/client");
const {
  hashPassword,
  verifyPassword,
  verifyHash,
} = require("../helpers/argonHelper");
const { verifyAccessToken } = require("../helpers/jwtHelper");
const user = require("../models/user");
const employer = require("../models/employer");
const freelancer = require("../models/freelancer");
const token = require("../models/token");
const { validateUser } = require("../utils/validate");
const { sendMail } = require("../utils/mailer");
const resetTemplateEnd = require("../templates/resetTemplateEnd");

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
  } else if (
    role === "freelancer" ||
    role === "employer" ||
    role === "coordinator"
  ) {
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
          profil: userData.profileIsComplete,
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
    return res.status(200).json({ result });
  }
  return res.status(404).json({ Erreur: "L'utilisateur n'existe pas" });
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

const resetPassword = async (req, res) => {
  const { userToken, userId, password } = req.body;
  const passwordResetToken = await token.findOne(userId);
  if (!passwordResetToken) {
    return res.status(401).send("Token invalide ou expiré");
  }
  const expired = await verifyAccessToken(passwordResetToken.expiration);
  if (Math.floor(Date.now() / 1000) > expired.exp) {
    return res.status(401).send("Token invalide ou expiré");
  }
  const valid = await verifyHash(userToken, passwordResetToken.token);
  if (!valid) {
    return res.status(401).send("Token invalide ou expiré");
  }
  const newHashedPassword = await hashPassword(password);
  await user.updateOne(userId, {
    hashedPassword: `${newHashedPassword}`,
  });
  const userToReset = await user.findOne(userId);
  sendMail(
    {
      firstname: "Habble",
      lastname: "",
      email: "no-reply@habble.com",
      recipient: "habble",
    },
    resetTemplateEnd(userToReset.firstname)
  );
  // CHANGER HABBLE (utilisé pour les tests) PAR userToReset.email
  await token.deleteOne(userId);
  return res.status(200).json({ message: "Mot de passe réinitialisé." });
};

const getUserWithRole = async (req, res) => {
  const userId = parseInt(req.params.id, 10);
  let roleResult;
  try {
    const userResult = await user.findOne(userId);
    delete userResult.hashedPassword;
    if (userResult.role === "employer") {
      roleResult = await employer.findOneEmployerByUserId(userId);
    }
    if (userResult.role === "freelancer") {
      roleResult = await freelancer.findOneFreelancerByUserId(userId);
    }
    // if (userResult.role === "coordinator") {
    //   roleResult = await freelancer.findOneCoordinatorByUserId(userId);
    //   console.log(roleResult);
    // }
    return res.status(200).json({ userResult, roleResult });
  } catch (e) {
    return res
      .status(500)
      .json({ error: "Problème dans la requête à la base de données" });
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
  resetPassword,
  getUserWithRole,
};
