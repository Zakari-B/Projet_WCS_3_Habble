const express = require("express");

const UserController = require("./controllers/UsersController");
const FreelancerController = require("./controllers/FreelancerController");
const EmployerController = require("./controllers/EmployerController");
const DiplomeController = require("./controllers/DiplomeController");
const FormationController = require("./controllers/FormationController");
const ExperienceProController = require("./controllers/ExperienceProController");

// const auth = require("./middlewares/auth");
const {
  authorization,
  authSelf,
  authSelfRole,
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
router.get("/auth/logout", authorization, UserController.logout);
router.get("/auth/sessionControl", authorization, sessionControl);

router.get("/users", authorization, UserController.getAll);
router.get("/users/:id", authorization, UserController.getOne);
router.put("/users/", authorization, UserController.updateOne);
router.put("/users/:id", authSelf, UserController.updateOne);
router.delete("/users/:id", UserController.deleteOne);

// Routes for Freelancers

router.get("/freelancers/", authorization, FreelancerController.getAll);
router.get("/freelancers/:id", authorization, FreelancerController.getOne);
router.put(
  "/freelancers/:id",
  authorization,
  authSelfRole,
  FreelancerController.updateOne
);

router.get(
  "/freelancers/:id/user",
  authorization,
  FreelancerController.getUser
);
// route delete a valider (si besoin)

// Routes for Employers

router.get("/employers/", EmployerController.getAll);
router.get("/employers/:id", EmployerController.getOne);
router.put("/employers/:id", EmployerController.updateOne);
router.get("/employers/:id/user", EmployerController.getUserFromEmployer);

// Routes for Diplomes
router.post(
  "/freelancers/:freelancerid/diplomes",
  authorization,
  authSelfRole,
  DiplomeController.createOne
);
router.get(
  "/freelancers/:freelancerid/diplomes",
  authorization,
  DiplomeController.getAll
);
router.get(
  "/freelancers/:freelancerid/diplomes/:id",
  authorization,
  DiplomeController.getOne
);
router.put(
  "/freelancers/:freelancerid/diplomes/:id",
  authorization,
  authSelfRole,
  DiplomeController.updateOne
);
router.delete(
  "/freelancers/:freelancerid/diplomes/:id",
  authorization,
  authSelfRole,
  DiplomeController.deleteOne
);

// Routes for Formations
router.post(
  "/freelancers/:freelancerid/formations",
  authorization,
  authSelfRole,
  FormationController.createOne
);
router.get(
  "/freelancers/:freelancerid/formations",
  authorization,
  FormationController.getAll
);
router.get(
  "/freelancers/:freelancerid/formations/:id",
  authorization,
  FormationController.getOne
);
router.put(
  "/freelancers/:freelancerid/formations/:id",
  authorization,
  authSelfRole,
  FormationController.updateOne
);
router.delete(
  "/freelancers/:freelancerid/formations/:id",
  authorization,
  authSelfRole,
  FormationController.deleteOne
);

// Routes for Expérience Pro
router.post(
  "/freelancers/:freelancerid/experiencePro",
  authorization,
  authSelfRole,
  ExperienceProController.createOne
);
router.get(
  "/freelancers/:freelancerid/experiencePro",
  authorization,
  ExperienceProController.getAll
);
router.get(
  "/freelancers/:freelancerid/experiencePro/:id",
  authorization,
  ExperienceProController.getOne
);
router.put(
  "/freelancers/:freelancerid/experiencePro/:id",
  authorization,
  authSelfRole,
  ExperienceProController.updateOne
);
router.delete(
  "/freelancers/:freelancerid/experiencePro/:id",
  authorization,
  authSelfRole,
  ExperienceProController.deleteOne
);
module.exports = router;
