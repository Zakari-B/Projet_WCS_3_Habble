const { Prisma } = require("@prisma/client");
const { hashPassword } = require("../helpers/argonHelper");
const user = require("../models/user");
const freelancer = require("../models/freelancer");
const employer = require("../models/employer");

const createOne = async (req, res) => {
  let userCreated;
  let freelancerCreated;
  let employerCreated;
  const { firstname, lastname, email, password, role } = req.body;
  const completedProfile = !(role === "freelancer");
  const error = user.validate(
    {
      firstname,
      lastname,
      email,
      password,
      role,
      profileIsComplete: completedProfile,
    },
    true
  );
  if (error) {
    res.status(422).json(error);
  }
  if (role === "freelancer" || role === "employer") {
    try {
      const hashedPassword = (await hashPassword(password)).toString();
      const message = await user.createOne({
        firstname,
        lastname,
        email,
        hashedPassword,
        role,
        profileIsComplete: completedProfile,
        dateCreated: new Date(),
      });
      userCreated = message;
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === "P2002") {
          return res.status(409).json({
            erreur: "Cette adresse email est déjà utilisée.",
          });
        }
      }
    }
  }
  if (role === "freelancer") {
    try {
      const freelancerMessage = await freelancer.createOne({
        displayName: `${userCreated.firstname} ${userCreated.lastname}`,
        activityDescription: "",
        userId: userCreated.id,
        zipCode: "",
        phone: "",
        experienceYear: 0,
        price: 0.0,
        description: "",
        acceptEmails: false,
        siret: 0,
        available: false,
        dateCreated: new Date(),
        picture: "",
      });
      freelancerCreated = freelancerMessage;
    } catch (e) {
      console.error({ error: "Problème de création de l'entrée freelancer" });
    }
    res.status(201).json({ userCreated, freelancerCreated });
  } else if (role === "employer") {
    try {
      const employerMessage = await employer.createOne({
        displayName: `${userCreated.firstname} ${userCreated.lastname}`,
        userId: userCreated.id,
        phone: "",
        dateCreated: new Date(),
        picture: "",
      });
      employerCreated = employerMessage;
    } catch (e) {
      console.error({ error: "Problème de création de l'entrée employeur" });
    }
    res.status(201).json({ userCreated, employerCreated });
  } else {
    res.status(400).send({ error: "Erreur d'attribution du rôle" });
  }
  return null;
};

module.exports = { createOne };
