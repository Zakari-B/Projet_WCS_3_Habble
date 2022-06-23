const express = require("express");

const UserController = require("./controllers/UsersController");
const FreelancerController = require("./controllers/FreelancerController");
const EmployerController = require("./controllers/EmployerController");
const DiplomeController = require("./controllers/DiplomeController");
const FormationController = require("./controllers/FormationController");
const ExperienceProController = require("./controllers/ExperienceProController");
const LieuController = require("./controllers/LieuController");

// const auth = require("./middlewares/auth");
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

router.get("/freelancers/:id/user", FreelancerController.getUser);
// route delete a valider (si besoin)

// Routes for Employers

router.get("/employers/", EmployerController.getAll);
router.get("/employers/:id", EmployerController.getOne);
router.put("/employers/:id", EmployerController.updateOne);
router.get("/employers/:id/user", EmployerController.getUserFromEmployer);

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

// Routes for Formations
router.post(
  "/freelancers/:freelancerid/formations",
  FormationController.createOne
);
router.get("/freelancers/:freelancerid/formations", FormationController.getAll);
router.get(
  "/freelancers/:freelancerid/formations/:id",
  FormationController.getOne
);
router.put(
  "/freelancers/:freelancerid/formations/:id",
  FormationController.updateOne
);
router.delete(
  "/freelancers/:freelancerid/formations/:id",
  FormationController.deleteOne
);

// Routes for Expérience Pro
router.post(
  "/freelancers/:freelancerid/experiencePro",
  ExperienceProController.createOne
);
router.get(
  "/freelancers/:freelancerid/experiencePro",
  ExperienceProController.getAll
);
router.get(
  "/freelancers/:freelancerid/experiencePro/:id",
  ExperienceProController.getOne
);
router.put(
  "/freelancers/:freelancerid/experiencePro/:id",
  ExperienceProController.updateOne
);
router.delete(
  "/freelancers/:freelancerid/experiencePro/:id",
  ExperienceProController.deleteOne
);

// Routes for Lieu
router.post("/employers/lieu", LieuController.createOne);

module.exports = router;
