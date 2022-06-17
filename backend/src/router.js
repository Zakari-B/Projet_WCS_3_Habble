const express = require("express");

const UserController = require("./controllers/UsersController");
const FreelancerController = require("./controllers/FreelancerController");
const EmployerController = require("./controllers/EmployerController");
// const auth = require("./middlewares/auth");

const router = express.Router();

router.post(
  "/auth/register",
  UserController.createOne,
  FreelancerController.createOne,
  EmployerController.createOne
);

router.post("/auth/login", UserController.login);
router.delete("/users/delete/:id", UserController.deleteOne);

module.exports = router;
