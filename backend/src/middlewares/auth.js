require("dotenv").config();

const crypto = require("crypto");
const { expirationToken, verifyAccessToken } = require("../helpers/jwtHelper");
const freelancer = require("../models/freelancer");
const user = require("../models/user");
const token = require("../models/token");
const { resetHash } = require("../helpers/argonHelper");
const { sendMail } = require("../utils/mailer");
const resetTemplate = require("../templates/resetTemplate");
const employer = require("../models/employer");
const coordinator = require("../models/coordinator");

const authorization = async (req, res, next) => {
  const authToken = req.cookies.userToken;

  if (!authToken) {
    return res.sendStatus(401);
  }
  try {
    const data = await verifyAccessToken(authToken);
    req.userId = data.payload.user.id;
    req.userRole = data.payload.user.role;

    if (req.userRole === "freelancer") {
      const freelancerEntry = await freelancer.findOneFreelancerByUserId(
        req.userId
      );
      if (freelancerEntry) {
        req.roleId = freelancerEntry.id;
      }
    }
    if (req.userRole === "employer") {
      const employerEntry = await employer.findOneEmployerByUserId(req.userId);
      if (employerEntry) {
        req.roleId = employerEntry.id;
      }
    }
    if (data.payload.user.isAdmin === true) {
      req.isAdmin = true;
    }
    if (req.userRole === "coordinator") {
      const coordinatorEntry = await coordinator.findOneCoordinatorByUserId(
        req.userId
      );
      if (coordinatorEntry) {
        req.roleId = coordinatorEntry.id;
      }
    }
    return next();
  } catch (e) {
    console.error(e);
    return res.sendStatus(401);
  }
};

const authSelf = async (req, res, next) => {
  if (req.userId === parseInt(req.params.id, 10) || req.isAdmin === true) {
    return next();
  }
  return res.sendStatus(401);
};

const authSelfRole = async (req, res, next) => {
  if (
    req.roleId === parseInt(req.params.freelancerid, 10) ||
    req.isAdmin === true
  ) {
    return next();
  }
  if (req.roleId === parseInt(req.params.coordinatorid, 10)) {
    return next();
  }
  return res.sendStatus(401);
};

const adminAuth = async (req, res, next) => {
  if (req.isAdmin === true) {
    return next();
  }
  return res.sendStatus(401);
};

const sessionControl = async (req, res) => {
  const authToken = req.cookies.userToken;
  if (!authToken) {
    return res.status(401).json({
      sessionExpired: true,
    });
  }
  try {
    const data = await verifyAccessToken(authToken);
    if (!data) {
      res.status(401).json({
        sessionExpired: true,
      });
    }
    return res.status(200).json({
      sessionExpired: false,
      userId: data.payload.user.id,
      userRole: data.payload.user.role,
      roleId: data.payload.fkId,
      firstname: data.payload.user.firstname,
      lastname: data.payload.user.lastname,
      isAdmin: data.payload.user.isAdmin,
    });
  } catch (e) {
    console.warn(e);
    return res.sendStatus(500);
  }
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;
  const userToReset = await user.findOneByEmail(email);
  if (!userToReset) {
    return res.status(404).send("Cet utilisateur n'existe pas");
  }
  const checkForToken = await token.findOne(parseInt(userToReset.id, 10));
  if (checkForToken) {
    await token.deleteOne(userToReset.id);
  }
  const resetToken = crypto.randomBytes(32).toString("hex");
  const hash = await resetHash(resetToken);
  const expirationTime = await expirationToken();
  await token.createOne({
    userId: userToReset.id,
    token: hash,
    expiration: expirationTime,
  });

  const resetLink = `${process.env.FRONTEND_URL}/passwordReset?token=${resetToken}&id=${userToReset.id}`;
  sendMail(
    {
      firstname: "Habble",
      lastname: "",
      email: "no-reply@habble.com",
      recipient: "habble",
    },
    resetTemplate(resetLink)
  );
  // CHANGER HABBLE (utilisé pour les tests) PAR userToReset.email
  return res.status(200).json({
    message: "Demande de réinitialisation de mot de passe effectuée.",
  });
};

module.exports = {
  authorization,
  authSelf,
  authSelfRole,
  sessionControl,
  forgotPassword,
  adminAuth,
};
