const { verifyAccessToken } = require("../helpers/jwtHelper");
const freelancer = require("../models/freelancer");

const authorization = async (req, res, next) => {
  const token = req.cookies.userToken;
  if (!token) {
    return res.sendStatus(401);
  }
  try {
    const data = await verifyAccessToken(token);
    req.userId = data.payload.id;
    req.userRole = data.payload.role;
    if (req.userRole === "freelancer") {
      const freelancerEntry = await freelancer.findOneByUserId(req.userId);
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

module.exports = { authorization, authSelf };
