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

// Routes for Freelancers

router.get("/freelancers/", FreelancerController.getAll);
router.get("/freelancers/:id", FreelancerController.getOne);
router.put("/freelancers/:id", FreelancerController.updateOne);

module.exports = router;
