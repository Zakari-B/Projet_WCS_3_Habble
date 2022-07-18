const {
  getAllByCoordinator,
  createOneByCoordinator,
  deleteOneByCoordinator,
  getOneExpertiseByCoordinator,
} = require("../models/CoordinatorExpertises");

const getAll = async (req, res) => {
  const coordinatorId = parseInt(req.params.coordinatorId, 10);
  try {
    const expertisesList = await getAllByCoordinator(coordinatorId);
    if (expertisesList.length === 0) {
      return res.status(404).send("Aucune réponse trouvée");
    }
    return res.status(200).json(expertisesList);
  } catch (e) {
    console.warn(e);
    return res.sendStatus(500);
  }
};

const getOneByCoordinator = async (req, res) => {
  const coordinatorId = parseInt(req.params.coordinatorId, 10);
  const expertiseId = parseInt(req.params.expertiseId, 10);

  try {
    const expertise = await getOneExpertiseByCoordinator(
      coordinatorId,
      expertiseId
    );
    if (expertise.length === 0) {
      res.status(404).send("Il n'y a pas encore d'expertises");
    } else {
      return res.status(201).send(expertise);
    }
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de lecture de l'expertise" });
  }
  return null;
};

const createOne = async (req, res) => {
  const coordinatorId = parseInt(req.params.coordinatorId, 10);
  const expertiseId = parseInt(req.params.expertiseId, 10);

  try {
    const expertiseCreated = await createOneByCoordinator({
      coordinatorId,
      expertiseId,
    });
    return res.status(201).json({ expertiseCreated });
  } catch (e) {
    console.warn(e);
    return res.status(500).json(e);
  }
};

const deleteOne = async (req, res) => {
  const coordinatorId = parseInt(req.params.coordinatorId, 10);
  const expertiseId = parseInt(req.params.expertiseId, 10);
  const expertiseCheck = await getOneExpertiseByCoordinator(
    coordinatorId,
    expertiseId
  );
  if (!expertiseCheck) {
    return res.status(404).json({ Erreur: "Aucune réponse trouvée" });
  }

  try {
    await deleteOneByCoordinator(parseInt(expertiseCheck[0].id, 10));
    return res.status(200).json({ Succès: `Expertise supprimée avec succès ` });
  } catch (e) {
    console.warn(e);
    return res.sendStatus(500);
  }
};

module.exports = {
  getAll,
  createOne,
  deleteOne,
  getOneByCoordinator,
};
