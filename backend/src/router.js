const express = require("express");

const UserController = require("./controllers/UsersController");
const FreelancerController = require("./controllers/FreelancerController");
const EmployerController = require("./controllers/EmployerController");
const { authorization, authSelf } = require("./middlewares/auth");

const router = express.Router();

// Routes for Users

router.post(
  "/auth/register",
  UserController.createOne,
  FreelancerController.createOne,
  EmployerController.createOne
);
router.post("/auth/login", UserController.login);

router.get("/users", authorization, UserController.getAll);
router.get("/users/:id", authorization, authSelf, UserController.getOne);
router.put("/users/:id", authSelf, UserController.updateOne);
router.delete("/users/delete/:id", authSelf, UserController.deleteOne);

router.get("/freelancers/:id/user", FreelancerController.getUser);
// Routes for Freelancers

router.get("/freelancers/", FreelancerController.getAll);
router.get("/freelancers/:id", FreelancerController.getOne);
router.put("/freelancers/:id", FreelancerController.updateOne);
// route delete a valider (si besoin)

module.exports = router;
