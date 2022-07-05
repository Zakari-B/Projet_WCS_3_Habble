const {
  createOneCoordinator,
  getAllCoordinatorsProfileInfo,
} = require("../models/coordinator");

exports.createOne = async (req, res, next) => {
  const userAccount = req.userCreated;
  if (userAccount.role === "coordinator") {
    try {
      const coordinatorCreated = await createOneCoordinator({
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
      return res.status(201).send({ userAccount, coordinatorCreated });
    } catch (e) {
      return res
        .status(500)
        .json({ error: "Problème de création de l'entrée coordinateur" });
    }
  } else {
    next();
  }
  return null;
};

exports.getOne = async (req, res) => {
  const coordinatorId = parseInt(req.params.id, 10);
  try {
    const coordinator = await getAllCoordinatorsProfileInfo(coordinatorId);
    if (!coordinator) {
      return res.status(404).send(`Coordinator ${coordinatorId} not found.`);
    }
    return res.status(200).json(coordinator);
  } catch (e) {
    return res.status(500).send(e);
    //   .json({ error: "Problème de lecture du coordinateurs" });
  }
};
