const { verifyAccessToken } = require("../helpers/jwtHelper");
const freelancer = require("../models/freelancer");
const employer = require("../models/employer");
const coordinator = require("../models/coordinator");

const authorization = async (req, res, next) => {
  const token = req.cookies.userToken;
  if (!token) {
    return res.sendStatus(401);
  }
  try {
    const data = await verifyAccessToken(token);
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
  if (req.userId === parseInt(req.params.id, 10)) {
    return next();
  }
  return res.sendStatus(401);
};

const authSelfRole = async (req, res, next) => {
  // ne trouve pas req.params.freelancerid
  if (req.roleId === parseInt(req.params.freelancerid, 10)) {
    return next();
  }

  return res.sendStatus(401);
};

const sessionControl = async (req, res) => {
  const token = req.cookies.userToken;
  if (!token) {
    res.status(401).json({
      sessionExpired: true,
    });
  }
  try {
    const data = await verifyAccessToken(token);
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

module.exports = { authorization, authSelf, sessionControl, authSelfRole };
