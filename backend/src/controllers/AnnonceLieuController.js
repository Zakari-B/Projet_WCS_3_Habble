const {
  getAllByAnnonce,
  createOneByAnnonce,
  getOneLocationByAnnonceId,
  deleteOneByAnnonce,
} = require("../models/annonceLieu");

const getAllByAnnonceId = async (req, res) => {
  const annonceId = parseInt(req.params.annonceId, 10);
  try {
    const locationsList = await getAllByAnnonce(annonceId);
    if (locationsList.length === 0) {
      return res.status(404).send("Aucune réponse trouvée");
    }
    return res.status(200).json(locationsList);
  } catch (e) {
    console.warn(e);
    return res.sendStatus(500);
  }
};

const getOneByAnnonceId = async (req, res) => {
  const annonceId = parseInt(req.params.annonceId, 10);
  const locationId = parseInt(req.params.locationId, 10);

  try {
    const location = await getOneLocationByAnnonceId(annonceId, locationId);
    if (location.length === 0) {
      res.status(404).send("Il n'y a pas encore de lieux");
    } else {
      return res.status(201).send(location);
    }
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Problème de lecture du lieu" });
  }
  return null;
};

const createOne = async (req, res) => {
  const annonceId = parseInt(req.params.annonceId, 10);
  const locationId = parseInt(req.params.serviceId, 10);

  try {
    const locationCreated = await createOneByAnnonce({
      annonceId,
      locationId,
    });
    return res.status(201).json({ locationCreated });
  } catch (e) {
    console.warn(e);
    return res.status(500).json(e);
  }
};

const deleteOne = async (req, res) => {
  const annonceId = parseInt(req.params.annonceId, 10);
  const locationId = parseInt(req.params.serviceId, 10);
  const locationCheck = await getOneLocationByAnnonceId(annonceId, locationId);
  if (!locationCheck) {
    return res.status(404).json({ Erreur: "Aucune réponse trouvée" });
  }

  try {
    await deleteOneByAnnonce(parseInt(locationCheck[0].id, 10));
    return res.status(200).json({ Succès: `Lieu supprimé avec succès` });
  } catch (e) {
    console.warn(e);
    return res.sendStatus(500);
  }
};

module.exports = {
  getAllByAnnonceId,
  getOneByAnnonceId,
  createOne,
  deleteOne,
};
