const {
  createOneService,
  getAllService,
  getOneService,
  updateOneService,
  deleteOneService,
} = require("../models/service");

const createOne = async (req, res) => {
  try {
    const serviceCreated = await createOneService(req.body);
    return res.status(201).send(serviceCreated);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Problème de création du service" });
  }
};

const getAll = async (req, res) => {
  try {
    const services = await getAllService();
    if (!services) {
      return res.status(404).send(`There are no services yet`);
    }
    return res.status(200).json(services);
  } catch (e) {
    return res.status(500).json({ error: "Problème de lecture des services" });
  }
};

const getOne = async (req, res) => {
  const serviceID = parseInt(req.params.id, 10);

  try {
    const service = await getOneService(serviceID);
    if (!service) {
      res.status(404).send("Aucun service trouvé");
    } else {
      return res.status(201).send(service);
    }
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Problème de lecture du service" });
  }
  return null;
};

const updateOne = async (req, res) => {
  const serviceID = parseInt(req.params.id, 10);

  try {
    const serviceUpdated = await updateOneService(serviceID, req.body);
    return res.status(201).send(serviceUpdated);
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de modification de l'entrée service" });
  }
};

const deleteOne = async (req, res) => {
  const serviceID = parseInt(req.params.id, 10);

  try {
    await deleteOneService(serviceID);
    return res.status(200).send("Le service a été supprimée avec succès");
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de suppression de l'entrée service" });
  }
};
module.exports = { createOne, getAll, getOne, updateOne, deleteOne };
