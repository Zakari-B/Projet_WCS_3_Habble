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

router.get("/freelancers/", FreelancerController.getAll);
router.put("/freelancers/:id", FreelancerController.updateOne);

router.post("/auth/login", UserController.login);

module.exports = router;
