const { findOneFreelancer } = require("../models/freelancer");
const { findOneCoordinator } = require("../models/coordinator");
const {
  getAllFormationbyFreelancerId,
  getAllFormationbyCoordinatorId,
  getOneFormationbyFreelancerId,
  getOneFormationbyCoordinatorId,
  createOneFormation,
  createOneFormationByCoordinator,
  updateOneFormation,
  updateOneFormationByCoordinator,
  deleteOneFormation,
  deleteOneFormationByCoordinator,
} = require("../models/formation");
const { validateFormation } = require("../utils/validate");

const createOne = async (req, res) => {
  // on récupère l'id du freelancer dans la requête
  const freelancerId = parseInt(req.params.freelancerid, 10);
  // on check si le freelancer existe et on renvoie une 404 si il n'existe pas
  const freelancer = await findOneFreelancer(freelancerId);
  if (!freelancer) {
    return res.status(404).send(`Freelancer #${freelancerId} not found.`);
  }

  // on check si les champs de la formation sont bons
  const error = validateFormation(req.body, true);
  if (error) {
    console.error(error);
    return res.status(422).json(error.details);
  }

  try {
    const formationCreated = await createOneFormation({
      ...req.body,
      freelancerId,
    });
    return res.status(201).send(formationCreated);
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de création de l'entrée formation" });
  }
};

const createOneByCoordinator = async (req, res) => {
  // on récupère l'id du freelancer dans la requête
  const coordinatorId = parseInt(req.params.coordinatorid, 10);
  // on check si le freelancer existe et on renvoie une 404 si il n'existe pas
  const coordinator = await findOneCoordinator(coordinatorId);
  if (!coordinator) {
    return res.status(404).send(`Coordinator #${coordinatorId} not found.`);
  }

  // on check si les champs de la formation sont bons
  const error = validateFormation(req.body, true);
  if (error) {
    console.error(error);
    return res.status(422).json(error.details);
  }

  try {
    const formationCreated = await createOneFormationByCoordinator({
      ...req.body,
      coordinatorId,
    });
    return res.status(201).send(formationCreated);
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de création de l'entrée formation" });
  }
};

const getAll = async (req, res) => {
  const freelancerId = parseInt(req.params.freelancerid, 10);
  try {
    const formationList = await getAllFormationbyFreelancerId(freelancerId);
    return res.status(201).send(formationList);
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de lecture des formations" });
  }
};

const getAllByCoordinator = async (req, res) => {
  const coordinatorId = parseInt(req.params.coordinatorid, 10);
  try {
    const formationList = await getAllFormationbyCoordinatorId(coordinatorId);
    return res.status(201).send(formationList);
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de lecture des formations" });
  }
};

const getOne = async (req, res) => {
  const freelancerId = parseInt(req.params.freelancerid, 10);
  const formationID = parseInt(req.params.id, 10);

  try {
    const formation = await getOneFormationbyFreelancerId(
      freelancerId,
      formationID
    );
    if (!formation) {
      res.status(404).send("Aucune formation trouvée pour ce professionnel");
    } else {
      return res.status(201).send(formation);
    }
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de lecture de la formation" });
  }
  return null;
};

const getOneByCoordinator = async (req, res) => {
  const coordinatorId = parseInt(req.params.coordinatorid, 10);
  const formationID = parseInt(req.params.id, 10);

  try {
    const formation = await getOneFormationbyCoordinatorId(
      coordinatorId,
      formationID
    );
    if (!formation) {
      res.status(404).send("Aucune formation trouvée pour ce professionnel");
    } else {
      return res.status(201).send(formation);
    }
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de lecture de la formation" });
  }
  return null;
};

const updateOne = async (req, res) => {
  const freelancerId = parseInt(req.params.freelancerid, 10);
  const formationID = parseInt(req.params.id, 10);

  const formation = await getOneFormationbyFreelancerId(
    freelancerId,
    formationID
  );

  if (!formation) {
    res
      .status(404)
      .send("Aucune formation correspondante pour ce professionnel");
  }

  // on check les erreurs de formulaire
  const error = validateFormation(req.body, false);
  if (error) {
    console.error(error);
    return res.status(422).json(error.details);
  }

  try {
    const formationUpdated = await updateOneFormation(formation.id, req.body);
    return res.status(201).send(formationUpdated);
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de modification de l'entrée formation" });
  }
};

const updateOneByCoordinator = async (req, res) => {
  const coordinatorId = parseInt(req.params.coordinatorid, 10);
  const formationID = parseInt(req.params.id, 10);

  const formation = await getOneFormationbyCoordinatorId(
    coordinatorId,
    formationID
  );

  if (!formation) {
    res
      .status(404)
      .send("Aucune formation correspondante pour ce professionnel");
  }

  // on check les erreurs de formulaire
  const error = validateFormation(req.body, false);
  if (error) {
    console.error(error);
    return res.status(422).json(error.details);
  }

  try {
    const formationUpdated = await updateOneFormationByCoordinator(
      formation.id,
      req.body
    );
    return res.status(201).send(formationUpdated);
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de modification de l'entrée formation" });
  }
};

const deleteOne = async (req, res) => {
  const freelancerId = parseInt(req.params.freelancerid, 10);
  const formationID = parseInt(req.params.id, 10);

  // on check qu'un displome existe pour le couple freelancer/formation
  const formation = await getOneFormationbyFreelancerId(
    freelancerId,
    formationID
  );

  if (!formation) {
    res
      .status(404)
      .send("Aucune formation correspondante pour ce professionnel");
  }

  try {
    await deleteOneFormation(formation.id);
    return res.status(200).send("La formation a été supprimée avec succès");
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de suppression de l'entrée formation" });
  }
};

const deleteOneByCoordinator = async (req, res) => {
  const coordinatorId = parseInt(req.params.coordinatorid, 10);
  const formationID = parseInt(req.params.id, 10);

  // on check qu'un displome existe pour le couple freelancer/formation
  const formation = await getOneFormationbyCoordinatorId(
    coordinatorId,
    formationID
  );

  if (!formation) {
    res
      .status(404)
      .send("Aucune formation correspondante pour ce professionnel");
  }

  try {
    await deleteOneFormationByCoordinator(formation.id);
    return res.status(200).send("La formation a été supprimée avec succès");
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de suppression de l'entrée formation" });
  }
};
module.exports = {
  createOne,
  createOneByCoordinator,
  getAll,
  getAllByCoordinator,
  getOne,
  getOneByCoordinator,
  updateOne,
  updateOneByCoordinator,
  deleteOne,
  deleteOneByCoordinator,
};
