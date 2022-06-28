// const { findOneFreelancer } = require("../models/freelancer");
const {
  createOneLocation,
  getAllLocations,
  getOneLocation,
  //   getAllLocationsbyAnnonceId,
  updateOneLocation,
  deleteOneLocation,
} = require("../models/lieu");
const { validateLocation } = require("../utils/validate");
// const { verifyAccessToken } = require("../helpers/jwtHelper");

const createOne = async (req, res) => {
  // on check si les champs du lieu sont bons
  const error = validateLocation(req.body, true);
  if (error) {
    console.error(error);
    return res.status(422).json(error.details);
  }

  try {
    const locationcreated = await createOneLocation({
      ...req.body,
    });
    return res.status(201).send(locationcreated);
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de création de l'entrée lieu" });
  }
};

const getAll = async (req, res) => {
  try {
    const locations = await getAllLocations();
    if (!locations) {
      return res.status(404).send(`There are no locations yet`);
    }
    return res.status(200).json(locations);
  } catch (e) {
    return res.status(500).json({ error: "Problème de lecture des lieux" });
  }
};

const getOne = async (req, res) => {
  const locationId = parseInt(req.params.id, 10);
  try {
    const location = await getOneLocation(locationId);
    if (!location) {
      return res
        .status(404)
        .send(`Il n'existe pas de lieu avec l'id ${locationId}`);
    }
    return res.status(200).json(location);
  } catch (e) {
    return res.status(500).json({ error: "Problème de lecture des lieux" });
  }
};

const updateOne = async (req, res) => {
  const locationId = parseInt(req.params.id, 10);

  // on check qu'un displome existe pour le couple freelancer/diplome
  const location = await getOneLocation(locationId);

  if (!location) {
    res.status(404).send("Aucun lieu correspondant avec cet ID");
  }

  // on check les erreurs de formulaire
  const error = validateLocation(req.body, false);
  if (error) {
    console.error(error);
    return res.status(422).json(error.details);
  }

  try {
    const locationupdated = await updateOneLocation(location.id, req.body);
    return res.status(201).send(locationupdated);
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de modification de l'entrée lieu" });
  }
};

const deleteOne = async (req, res) => {
  const locationId = parseInt(req.params.id, 10);

  const location = await getOneLocation(locationId);

  if (!location) {
    res.status(404).send("Aucun lieu correspondant pour ce professionnel");
  }

  try {
    await deleteOneLocation(location.id);
    return res.status(200).send("Le lieu a été supprimé avec succès");
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de suppression de l'entrée lieu" });
  }
};
module.exports = { createOne, getAll, getOne, updateOne, deleteOne };
