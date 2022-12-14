const express = require("express");

const UserController = require("./controllers/UsersController");
const FreelancerController = require("./controllers/FreelancerController");
const CoordinatorController = require("./controllers/CoordinatorController");
const EmployerController = require("./controllers/EmployerController");
const DiplomeController = require("./controllers/DiplomeController");
const FormationController = require("./controllers/FormationController");
const ExperienceProController = require("./controllers/ExperienceProController");
const LieuController = require("./controllers/LieuController");
const ServiceController = require("./controllers/ServiceControllers");
const ExpertiseController = require("./controllers/ExpertiseControllers");
const OfferController = require("./controllers/OfferController");
const mailController = require("./controllers/mailController");
const AnnonceController = require("./controllers/AnnonceController");
const fileController = require("./controllers/FileController");
const DocumentsController = require("./controllers/DocumentsController");
const FamilyController = require("./controllers/FamilyController");
const multer = require("./middlewares/multer");
const FreelancerServicesController = require("./controllers/FreelancerServicesControllers");
const AnnonceServicesController = require("./controllers/AnnonceServicesController");
const FreelancerExpertisesController = require("./controllers/FreelancerExpertisesControllers");
const PictureFreelancerController = require("./controllers/PictureFreelancerController");
const AnnonceLieuController = require("./controllers/AnnonceLieuController");
const PictureEmployerController = require("./controllers/PictureEmployerController");
const PictureCoordinatorController = require("./controllers/PictureCoordinateurController");
const MatchController = require("./controllers/MatchController");
const CoordinatorServicesController = require("./controllers/CoordinatorServicesController");
const CoordinatorExpertisesController = require("./controllers/CoordinatorExpertisesController");

const {
  authorization,
  authSelf,
  authSelfRole,
  sessionControl,
  forgotPassword,
  adminAuth,
} = require("./middlewares/auth");

const router = express.Router();

// Routes for Users

router.post(
  "/auth/register",
  UserController.createOne,
  FreelancerController.createOne,
  CoordinatorController.createOne,
  EmployerController.createOne
);
router.post("/auth/login", UserController.login);
router.get("/auth/logout", authorization, UserController.logout);
router.get("/auth/sessionControl", authorization, sessionControl);
router.post("/auth/forgotPassword", forgotPassword);
router.post("/auth/login", UserController.login);
router.post("/auth/resetPassword", UserController.resetPassword);

router.post("/file", authorization, multer, fileController.addOne);
router.post(
  "/family/:familyId/file",
  authorization,
  multer,
  fileController.addOneByFamily
);

router.post("/mail/contact", mailController.contact);
router.post(
  "/mail/freelancerAnnonceMatch",
  mailController.freelancerAnnonceMatch
);
router.post("/mail/freelancerNoMatch", mailController.freelancerNoMatch);

router.get("/users", UserController.getAll);
router.get("/users/:id", UserController.getOne);
router.put("/users/", authorization, UserController.updateOne);
router.put("/users/:id", authorization, authSelf, UserController.updateOne);
router.delete("/users/:id", UserController.deleteOne);

// Routes for Freelancers

// Routes for Freelancers
router.get("/freelancers/", FreelancerController.getAll);
router.get(
  "/freelancers/:freelancerid/user",

  FreelancerController.getUser
);
router.get("/freelancers/search", FreelancerController.getAllWithinDistance);
router.get(
  "/freelancers/search/filtered",
  FreelancerController.getAllWithinFixedDistanceAndServices
);

router.get(
  "/freelancers/:freelancerid/city",
  authorization,
  FreelancerController.getOneFreelancerWithCityInfo
);

router.get(
  "/freelancers/:freelancerid",
  authorization,
  FreelancerController.getOne
);

router.put(
  "/freelancers/:freelancerid",

  FreelancerController.updateOne
);

// route delete a valider (si besoin)

// Routes for freelancer's picture
router.put(
  "/freelancers/:freelancerid/picture",
  authorization,
  multer,
  PictureFreelancerController.updateOne
);

router.put(
  "/freelancers/:freelancerid/removedPicture",
  authorization,
  multer,
  PictureFreelancerController.removeOne
);

// Routes for Coordinators
router.get("/coordinators/", authorization, CoordinatorController.getAll);
router.get("/coordinators/:id", authorization, CoordinatorController.getOne);
router.get(
  "/coordinator/:coordinatorId/user",
  authorization,
  CoordinatorController.getUserFromCoordinator
);

router.put(
  "/coordinators/:coordinatorid",
  authorization,
  authSelfRole,
  CoordinatorController.updateOne
);

router.get(
  "/coordinators/:coordinatorid/city",
  authorization,
  CoordinatorController.getOneCoordinatorWithCityInfo
);

// Routes for coordinator's picture
router.put(
  "/coordinators/:coordinatorid/picture",
  authorization,
  multer,
  PictureCoordinatorController.updateOne
);

router.put(
  "/coordinators/:coordinatorId/removedPicture",
  authorization,
  multer,
  PictureCoordinatorController.removeOne
);

// Routes for Employers

router.get("/employers/", EmployerController.getAll);
router.get("/employers/:id", EmployerController.getOne);
router.put("/employers/:id", EmployerController.updateOne);
router.get("/employers/:id/user", EmployerController.getUserFromEmployer);

// Routes for employer's picture
router.put(
  "/employers/:id/picture",
  authorization,
  multer,
  PictureEmployerController.updateOne
);

router.put(
  "/employers/:id/removedPicture",
  authorization,
  multer,
  PictureEmployerController.removeOne
);

// Routes for documentsController

router.get(
  "/freelancers/:freelancerid/documents",
  // authorization,
  DocumentsController.getAll
);
router.get(
  "/coordinator/:coordinatorId/documents",
  authorization,
  DocumentsController.getAllByCoordinatorId
);
router.get(
  "/coordinators/:coordinatorId/family/:familyId/documents",
  authorization,
  DocumentsController.getAllByFamilyId
);
router.delete(
  "/freelancers/:freelancerid/documents/:id",
  authorization,
  authSelfRole,
  DocumentsController.deleteOne
);
router.delete(
  "/coordinator/:coordinatorid/documents/:id",
  authorization,
  authSelfRole,
  DocumentsController.deleteOneByCoordinatorId
);
router.delete(
  "/coordinator/:coordinatorId/family/:familyId/documents/:id",
  authorization,
  // authSelfRole,
  DocumentsController.deleteOneByFamily
);

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

// Routes for Diplomes/coordinator
router.post(
  "/coordinator/:coordinatorid/diplomes",
  authorization,
  authSelfRole,
  DiplomeController.createOneByCoordinator
);
router.get(
  "/coordinator/:coordinatorId/diplomes",
  authorization,
  DiplomeController.getAllByCoordinator
);
router.get(
  "/coordinator/:coordinatorid/diplomes/:id",
  authorization,
  DiplomeController.getOneByCoordinator
);
router.put(
  "/coordinator/:coordinatorid/diplomes/:id",
  authorization,
  authSelfRole,
  DiplomeController.updateOneByCoordinator
);
router.delete(
  "/coordinator/:coordinatorid/diplomes/:id",
  authorization,
  authSelfRole,
  DiplomeController.deleteOneByCoordinator
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

// Routes for Formations/ coordinator
router.post(
  "/coordinator/:coordinatorid/formations",
  authorization,
  authSelfRole,
  FormationController.createOneByCoordinator
);
router.get(
  "/coordinator/:coordinatorid/formations",
  authorization,
  FormationController.getAllByCoordinator
);

router.get(
  "/coordinator/:coordinatorid/formations/:id",
  authorization,
  FormationController.getOneByCoordinator
);
router.put(
  "/coordinator/:coordinatorid/formations/:id",
  authorization,
  authSelfRole,
  FormationController.updateOneByCoordinator
);
router.delete(
  "/coordinator/:coordinatorid/formations/:id",
  authorization,
  authSelfRole,
  FormationController.deleteOneByCoordinator
);

// Routes for Exp??rience Pro
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

// Routes for Exp??rience Pro/coordinator
router.post(
  "/coordinator/:coordinatorid/experiencePro",
  authorization,
  authSelfRole,
  ExperienceProController.createOneByCoordinator
);
router.get(
  "/coordinator/:coordinatorid/experiencePro",
  authorization,
  ExperienceProController.getAllByCoordinator
);
router.get(
  "/coordinator/:coordinatorid/experiencePro/:id",
  authorization,
  ExperienceProController.getOneByCoordinator
);
router.put(
  "/coordinator/:coordinatorid/experiencePro/:id",
  authorization,
  authSelfRole,
  ExperienceProController.updateOneByCoordinator
);
router.delete(
  "/coordinator/:coordinatorid/experiencePro/:id",
  authorization,
  authSelfRole,
  ExperienceProController.deleteOneByCoordinator
);

// Routes for Lieu
router.post("/annonces/lieu", LieuController.createOne);
router.get("/annonces/lieux", LieuController.getAll);
router.get("/annonces/lieu/:id", LieuController.getOne);
router.put("/annonces/lieu/:id", LieuController.updateOne);
router.delete("/annonces/lieu/:id", LieuController.deleteOne);

// Routes for services
router.post("/services", ServiceController.createOne);
router.get("/services", ServiceController.getAll);
router.get("/services/:id", ServiceController.getOne);
router.put("/services/:id", ServiceController.updateOne);
router.delete("/services/:id", ServiceController.deleteOne);

// Routes for services of one freelancer

router.get(
  "/freelancers/:freelancerId/services",
  FreelancerServicesController.getAll
);
router.get(
  "/freelancers/:freelancerId/services/:serviceId",
  FreelancerServicesController.getOneByFreelancerId
);
router.post(
  "/freelancers/:freelancerId/services/:serviceId",
  FreelancerServicesController.createOne
);
router.delete(
  "/freelancers/:freelancerId/services/:serviceId",
  FreelancerServicesController.deleteOne
);

// Routes for services of one coordinator

router.get(
  "/coordinator/:coordinatorId/services",
  CoordinatorServicesController.getAll
);
router.get(
  "/coordinator/:coordinatorId/services/:serviceId",
  CoordinatorServicesController.getOneByCoordinatorId
);
router.post(
  "/coordinator/:coordinatorId/services/:serviceId",
  CoordinatorServicesController.createOne
);
router.delete(
  "/coordinator/:coordinatorId/services/:serviceId",
  CoordinatorServicesController.deleteOne
);

// Routes for expertises
router.post("/expertises", ExpertiseController.createOne);
router.get("/expertises", ExpertiseController.getAll);
router.get("/expertises/:id", ExpertiseController.getOne);
router.put("/expertises/:id", ExpertiseController.updateOne);
router.delete("/expertises/:id", ExpertiseController.deleteOne);

// Routes pour famille/accompagnement
router.post(
  "/coordinators/:coordinatorId/famille",
  authorization,
  FamilyController.createOne
);
router.get(
  "/coordinators/:coordinatorId/familles",
  authorization,
  FamilyController.getAll
);
router.get(
  "/coordinators/:coordinatorId/famille/:familyId",
  authorization,
  FamilyController.getOne
);
router.put(
  "/coordinators/:coordinatorId/famille/:familyId",
  authorization,
  FamilyController.updateOne
);
router.delete(
  "/coordinators/:coordinatorId/famille/:familyId",
  authorization,
  FamilyController.deleteOne
);

// Routes for expertises of one freelancer
router.get(
  "/freelancers/:freelancerId/expertises",
  FreelancerExpertisesController.getAll
);
router.get(
  "/freelancers/:freelancerId/expertises/:expertiseId",
  FreelancerExpertisesController.getOneByFreelancerId
);
router.post(
  "/freelancers/:freelancerId/expertises/:expertiseId",
  FreelancerExpertisesController.createOne
);
router.delete(
  "/freelancers/:freelancerId/expertises/:expertiseId",
  FreelancerExpertisesController.deleteOne
);

// Routes for expertises of one freelancer
router.get(
  "/coordinator/:coordinatorId/expertises",
  CoordinatorExpertisesController.getAll
);
router.get(
  "/coordinator/:coordinatorId/expertises/:expertiseId",
  CoordinatorExpertisesController.getOneByCoordinator
);
router.post(
  "/coordinator/:coordinatorId/expertises/:expertiseId",
  CoordinatorExpertisesController.createOne
);
router.delete(
  "/coordinator/:coordinatorId/expertises/:expertiseId",
  CoordinatorExpertisesController.deleteOne
);

// Routes for announcements
router.post(
  "/employers/:employerid/annonce",
  authorization,
  AnnonceController.createOne
);
router.get(
  "/employers/:employerid/annonces",
  AnnonceController.getAllByEmployerId
);

router.get("/annonces", AnnonceController.getAll);
router.get(
  "/annonces/:annonceId/city",
  authorization,
  AnnonceController.getOneAnnonceWithCityInfo
);
router.get("/annonces/:id", AnnonceController.getOne);

router.get(
  "/employers/:employerid/annonce/:id",
  AnnonceController.getOneByEmployerId
);
router.put("/employers/:employerid/annonce/:id", AnnonceController.updateOne);
router.delete(
  "/employers/:employerid/annonce/:id",
  AnnonceController.deleteOne
);

router.post(
  "/coordinator/:coordinatorId/annonce",
  authorization,
  AnnonceController.createOneByCoordinatorId
);
router.get(
  "/coordinator/:coordinatorId/annonces",
  authorization,
  AnnonceController.getAllByCoordinatorId
);
router.put(
  "/coordinator/:coordinatorId/annonce/:id",
  authorization,
  AnnonceController.updateOneByCoordinatorId
);
router.delete(
  "/coordinator/:coordinatorId/annonce/:id",
  authorization,
  AnnonceController.deleteOneByCoordinatorId
);

// Routes for matches
router.post(
  "/annonce/:annonceId/freelancers/:freelancerId/match",
  MatchController.createOneFreelancerMatch
);

router.get(
  "/freelancers/:freelancerId/match",
  MatchController.getAllMatchForFreelancer
);

// Routes for offers
router.post(
  "/freelancers/:freelancerid/annonces/:annonceid/offers",

  OfferController.createOne
);
router.get("/offers", authorization, OfferController.getAll);
router.get("/offers/:id", authorization, OfferController.getOne);

router.get(
  "/annonces/:annonceid/offers",
  authorization,
  OfferController.getAllForAnAnnonce
);
router.get(
  "/freelancers/:freelancerid/annonces/:annonceid/offers",
  OfferController.getOneOfferForOneAnnonceAndOneFreelancer
);

router.put(
  "/freelancers/:freelancerid/offers/:id",
  authorization,
  authSelfRole,
  OfferController.updateOne
);

router.delete(
  "/freelancers/:freelancerid/offers/:id",
  authorization,
  authSelfRole,
  OfferController.deleteOne
);

// Routes for expertises
router.get("/expertises/:id", ExpertiseController.getOne);
// router.put("/expertises/:id", ExpertiseController.updateOne);
// router.delete("/expertises/:id", ExpertiseController.deleteOne);

// Routes for services of one annonce
router.get("/annonce/:annonceId/services", AnnonceServicesController.getAll);

router.get(
  "/annonce/:annonceId/services/:serviceId",
  AnnonceServicesController.getOneByAnnonceId
);
router.post(
  "/annonce/:annonceId/services/:serviceId",
  AnnonceServicesController.createOne
);

router.delete(
  "/annonce/:annonceId/services/:serviceId",
  AnnonceServicesController.deleteOne
);

// Admin routes
router.get(
  "/users/adminGetOne/:id",
  authorization,
  adminAuth,
  UserController.getUserWithRole
);
router.post(
  "/users/adminGetOneFromRole/",
  authorization,
  adminAuth,
  UserController.getUserFromRole
);
router.post(
  "/users/:freelancerId/verify/:docId",
  authorization,
  adminAuth,
  DocumentsController.verify
);
router.get(
  "/admin/getAllDocs",
  authorization,
  adminAuth,
  DocumentsController.adminGetAll
);

// routes for locations
router.get("/locations", LieuController.getAll);
router.get("/locations/:locationId", LieuController.getOne);
router.post("/locations/:locationId", LieuController.createOne);
router.delete("/locations/:locationId", LieuController.deleteOne);

// routes for lieux annonces

router.get(
  "/annonce/:annonceId/locations",
  AnnonceLieuController.getAllByAnnonceId
);

router.post(
  "/annonce/:annonceId/locations/:locationId",
  AnnonceLieuController.createOne
);

router.delete(
  "/annonce/:annonceId/locations/:locationId",
  AnnonceLieuController.deleteOne
);

module.exports = router;
