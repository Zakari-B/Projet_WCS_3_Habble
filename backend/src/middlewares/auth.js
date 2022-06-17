const { verifyAccessToken } = require("../helpers/jwtHelper");

const authorization = async (req, res, next) => {
  const token = req.cookies.userToken;
  if (!token) {
    return res.sendStatus(401);
  }
  try {
    const data = await verifyAccessToken(token);
    req.userId = data.payload.id;
    req.userRole = data.payload.role;
    return next();
  } catch {
    return res.sendStatus(401);
  }
};

const authSelf = async (req, res, next) => {
  const token = req.cookies.userToken;
  if (!token) {
    return res.sendStatus(401);
  }
  try {
    const data = await verifyAccessToken(token);
    req.userId = data.payload.id;
    if (req.userId === parseInt(req.params.id, 10)) {
      return next();
    }
    return res.sendStatus(401);
  } catch {
    return res.sendStatus(401);
  }
};

module.exports = { authorization, authSelf };
