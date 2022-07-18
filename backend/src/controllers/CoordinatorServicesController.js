const {
  getAllByCoordinator,
  createOneByCoordinator,
  deleteOneByCoordinator,
  getOneServiceByCoordinatorId,
} = require("../models/CoordinatorServices");

const getAll = async (req, res) => {
  const coordinatorId = parseInt(req.params.coordinatorId, 10);
  try {
    const servicesList = await getAllByCoordinator(coordinatorId);
    if (servicesList.length === 0) {
      return res.status(404).send("Aucune réponse trouvée");
    }
    return res.status(200).json(servicesList);
  } catch (e) {
    console.warn(e);
    return res.sendStatus(500);
  }
};

const getOneByCoordinatorId = async (req, res) => {
  const coordinatorId = parseInt(req.params.coordinatorId, 10);
  const serviceId = parseInt(req.params.serviceId, 10);

  try {
    const service = await getOneServiceByCoordinatorId(
      coordinatorId,
      serviceId
    );
    if (service.length === 0) {
      res.status(404).send("Il n'y a pas encore de service");
    } else {
      return res.status(201).send(service);
    }
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Problème de lecture du service" });
  }
  return null;
};

const createOne = async (req, res) => {
  const coordinatorId = parseInt(req.params.coordinatorId, 10);
  const serviceId = parseInt(req.params.serviceId, 10);

  try {
    const serviceCreated = await createOneByCoordinator({
      coordinatorId,
      serviceId,
    });
    return res.status(201).json({ serviceCreated });
  } catch (e) {
    console.warn(e);
    return res.status(500).json(e);
  }
};

const deleteOne = async (req, res) => {
  const coordinatorId = parseInt(req.params.coordinatorId, 10);
  const serviceId = parseInt(req.params.serviceId, 10);
  const serviceCheck = await getOneServiceByCoordinatorId(
    coordinatorId,
    serviceId
  );
  if (!serviceCheck) {
    return res.status(404).json({ Erreur: "Aucune réponse trouvée" });
  }

  try {
    await deleteOneByCoordinator(parseInt(serviceCheck[0].id, 10));
    return res.status(200).json({ Succès: `Service supprimé avec succès ` });
  } catch (e) {
    console.warn(e);
    return res.sendStatus(500);
  }
};

module.exports = {
  getAll,
  createOne,
  deleteOne,
  getOneByCoordinatorId,
};
