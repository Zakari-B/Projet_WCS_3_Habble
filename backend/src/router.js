const express = require("express");

const UserController = require("./controllers/UsersController");
const FreelancerController = require("./controllers/FreelancerController");
const EmployerController = require("./controllers/EmployerController");

const router = express.Router();

router.post(
  "/users",
  UserController.createOne,
  FreelancerController.createOne,
  EmployerController.createOne
);

module.exports = router;
