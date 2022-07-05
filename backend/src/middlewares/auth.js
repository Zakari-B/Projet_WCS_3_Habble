require("dotenv").config();

const crypto = require("crypto");
const { expirationToken, verifyAccessToken } = require("../helpers/jwtHelper");
const freelancer = require("../models/freelancer");
const user = require("../models/user");
const token = require("../models/token");
const { resetHash } = require("../helpers/argonHelper");
const { sendMail } = require("../utils/mailer");
const resetTemplate = require("../templates/resetTemplate");

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
    return next();
  } catch (e) {
    console.error(e);
    return res.sendStatus(401);
  }
};

const authSelf = async (req, res, next) => {
  if (req.userId === parseInt(req.params.id, 10)) {
    return next();
  }
  return res.sendStatus(401);
};

const authSelfRole = async (req, res, next) => {
  // ne trouve pas req.params.freelancerid
  if (req.roleId === parseInt(req.params.id, 10)) {
    return next();
  }
  return res.sendStatus(401);
};

const sessionControl = async (req, res) => {
  const authToken = req.cookies.userToken;
  if (!authToken) {
    res.status(401).json({
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
    res.status(200).json({
      sessionExpired: false,
      userId: data.payload.user.id,
      userRole: data.payload.user.role,
      roleId: data.payload.fkId,
      firstname: data.payload.user.firstname,
      lastname: data.payload.user.lastname,
    });
  } catch (e) {
    console.warn(e);
  }
};

const resetPassword = async (email) => {
  const userToReset = await user.findOneByEmail(email);
  if (!userToReset) {
    return "Cet utilisateur n'existe pas";
  }
  const checkForToken = await token.findOne(userToReset.id);
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

  const resetLink = `${process.env.FRONTEND_URL}/api/auth/passwordReset?token=${resetToken}&id=${userToReset.id}`;
  sendMail({ recipient: "habble" }, resetTemplate);
  return resetLink;
};

module.exports = {
  authorization,
  authSelf,
  authSelfRole,
  sessionControl,
  resetPassword,
};
