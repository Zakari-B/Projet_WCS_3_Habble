require("dotenv").config();

const argon2 = require("argon2");

const salt = Buffer.alloc(16, process.env.ARGON2_SALT);
const secret = Buffer.alloc(16, process.env.ARGON2_SECRET);

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = (plainPassword) => {
  return argon2.hash(plainPassword, hashingOptions);
};

const verifyPassword = (plainPassword, hashedPassword) => {
  return argon2.verify(hashedPassword, plainPassword, hashingOptions);
};

const resetHash = (token) => {
  return argon2.hash(token, {
    type: argon2.argon2id,
    memoryCost: 2 ** 16,
    timeCost: 5,
    parallelism: 1,
    secret,
    salt,
  });
};

const verifyHash = (token, hashedToken) => {
  return argon2.verify(hashedToken, token, {
    type: argon2.argon2id,
    memoryCost: 2 ** 16,
    timeCost: 5,
    parallelism: 1,
    secret,
    salt,
  });
};

module.exports = {
  hashPassword,
  verifyPassword,
  resetHash,
  verifyHash,
};
