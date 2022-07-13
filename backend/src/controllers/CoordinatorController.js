const {
  createOneCoordinator,
  getAllCoordinatorsProfileInfo,
  getAllCoordinators,
  findOneCoordinator,
  getUserFromCoordinator,
  getOneCoordinatorWithCity,
  updateOneCoordinator,
} = require("../models/coordinator");

const { validateCoordinator } = require("../utils/validate");

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

exports.getAll = async (req, res) => {
  try {
    const freelancers = await getAllCoordinators();
    if (!freelancers) {
      return res.status(404).send(`There are no freelancers yet`);
    }
    return res.status(200).json(freelancers);
  } catch (e) {
    console.warn(e);
    return res
      .status(500)
      .json({ error: "Problème de lecture des freelancers" });
  }
};

exports.getUserFromCoordinator = async (req, res) => {
  const coordinatorId = parseInt(req.roleId, 10);

  try {
    const userId = await findOneCoordinator(coordinatorId);

    const coordinator = await getUserFromCoordinator(userId.userId);

    return res.status(200).json(coordinator);
  } catch (e) {
    return res
      .status(500)
      .json({ error: "Problème de mise à jour du coordinator" });
  }
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
  }
};

exports.getOneCoordinatorWithCityInfo = async (req, res) => {
  const coordinatorId = parseInt(req.params.coordinatorId, 10);
  try {
    const coordinator = await getOneCoordinatorWithCity(coordinatorId);
    if (!coordinator) {
      return res.status(404).send(`Coordinator #${coordinatorId} not found.`);
    }
    return res.status(200).json(coordinator);
  } catch (e) {
    console.warn(e);
    return res
      .status(500)
      .json({ error: "Problème de lecture des coordinateurs" });
  }
};

exports.updateOne = async (req, res) => {
  const coordinatorId = parseInt(req.params.coordinatorid, 10);
  const error = validateCoordinator(req.body, false);
  if (error) {
    console.error(error);
    return res.status(422).json(error.details);
  }

  const mycoordinator = await findOneCoordinator(coordinatorId);
  if (!mycoordinator) {
    return res.status(404).send(`Coordinator #${coordinatorId} not found.`);
  }

  try {
    const coordinatorModify = await updateOneCoordinator(
      coordinatorId,
      req.body
    );
    return res.status(200).json(coordinatorModify);
  } catch (e) {
    return res
      .status(500)
      .json({ error: "Problème de mise à jour du coordinateur" });
  }
};

exports.getUserFromCoordinator = async (req, res) => {
  const coordinatorId = parseInt(req.params.coordinatorId, 10);

  try {
    const userId = await findOneCoordinator(coordinatorId);

    const employer = await getUserFromCoordinator(userId.userId);

    return res.status(200).json(employer);
  } catch (e) {
    return res
      .status(500)
      .json({ error: "Problème de mise à jour du employer" });
  }
};
