const freelancer = require("../models/freelancer");

const createOne = async (req, res, next) => {
  const userAccount = req.userCreated;
  if (userAccount.role === "freelancer") {
    try {
      const freelancerCreated = await freelancer.createOne({
        displayName: `${userAccount.firstname} ${userAccount.lastname}`,
        activityDescription: "",
        userId: userAccount.id,
        zipCode: "",
        phone: "",
        experienceYear: 0,
        price: 0.0,
        description: "",
        acceptEmails: false,
        siret: 0,
        available: false,
        picture: "",
      });
      res.status(201).send({ userAccount, freelancerCreated });
    } catch (e) {
      res
        .status(500)
        .json({ error: "Problème de création de l'entrée freelancer" });
    }
  } else {
    next();
  }
};

module.exports = { createOne };
