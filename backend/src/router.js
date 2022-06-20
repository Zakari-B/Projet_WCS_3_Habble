const express = require("express");

const UserController = require("./controllers/UsersController");
const FreelancerController = require("./controllers/FreelancerController");
const EmployerController = require("./controllers/EmployerController");
const DiplomeController = require("./controllers/DiplomeController");

// const auth = require("./middlewares/auth");

const router = express.Router();

// Routes for Users

router.post(
  "/auth/register",
  UserController.createOne,
  FreelancerController.createOne,
  EmployerController.createOne
);
router.post("/auth/login", UserController.login);
router.get("/users", UserController.getAll);
router.get("/users/:id", UserController.getOne);
router.put("/users/:id", UserController.updateOne);
router.delete("/users/delete/:id", UserController.deleteOne);

// Routes for Freelancers

router.get("/freelancers/", FreelancerController.getAll);
router.get("/freelancers/:id", FreelancerController.getOne);
router.put("/freelancers/:id", FreelancerController.updateOne);
// route delete a valider (si besoin)

// Routes for Diplomes
router.post("/freelancers/:freelancerid/diplomes", DiplomeController.createOne);
router.get("/freelancers/:freelancerid/diplomes", DiplomeController.getAll);
router.get("/freelancers/:freelancerid/diplomes/:id", DiplomeController.getOne);
router.put(
  "/freelancers/:freelancerid/diplomes/:id",
  DiplomeController.updateOne
);
router.delete(
  "/freelancers/:freelancerid/diplomes/:id",
  DiplomeController.deleteOne
);

module.exports = router;
