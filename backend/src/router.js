const express = require("express");

const UserController = require("./controllers/UsersController");
const FreelancerController = require("./controllers/FreelancerController");
const EmployerController = require("./controllers/EmployerController");
const {
  authorization,
  authSelf,
  sessionControl,
} = require("./middlewares/auth");

const router = express.Router();

// Routes for Users

router.post(
  "/auth/register",
  UserController.createOne,
  FreelancerController.createOne,
  EmployerController.createOne
);
router.post("/auth/login", UserController.login);
router.get("/auth/logout", UserController.logout);
router.get("/auth/sessionControl", sessionControl);

router.get("/users", authorization, UserController.getAll);
router.get("/users/:id", authorization, authSelf, UserController.getOne);
router.put("/users/", authorization, UserController.updateOne);
router.put("/users/:id", authSelf, UserController.updateOne);
router.delete("/users/delete/:id", authSelf, UserController.deleteOne);

// Routes for Freelancers

router.get("/freelancers/", FreelancerController.getAll);
router.get("/freelancers/:id", FreelancerController.getOne);
router.put("/freelancers/:id", FreelancerController.updateOne);
// route delete a valider (si besoin)

// Routes for Employers

router.get("/employers/", EmployerController.getAll);
router.get("/employers/:id", EmployerController.getOne);
router.put("/employers/:id", EmployerController.updateOne);

module.exports = router;
