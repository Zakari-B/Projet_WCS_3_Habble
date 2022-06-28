const { findOneFreelancer } = require("../models/freelancer");
const {
  getAllFormationbyFreelancerId,
  getOneFormationbyFreelancerId,
  createOneFormation,
  updateOneFormation,
  deleteOneFormation,
} = require("../models/formation");
const { validateFormation } = require("../utils/validate");
// const { verifyAccessToken } = require("../helpers/jwtHelper");

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

const updateOne = async (req, res) => {
  const freelancerId = parseInt(req.params.freelancerid, 10);
  const formationID = parseInt(req.params.id, 10);

  // // on check les droits de mofification de formulaire
  // const freeId = await verifyAccessToken(req.cookies.userToken);
  // if (freeId.payload.fkId !== freelancerId) {
  //   return res
  //     .status(401)
  //     .send(
  //       "Vous n'avez pas les droits pour modifier une formation sur ce profil"
  //     );
  // }

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

const deleteOne = async (req, res) => {
  const freelancerId = parseInt(req.params.freelancerid, 10);
  const formationID = parseInt(req.params.id, 10);

  // on check les droits de mofification de formulaire
  // const freeId = await verifyAccessToken(req.cookies.userToken);
  // if (freeId.payload.fkId !== freelancerId) {
  //   return res
  //     .status(401)
  //     .send(
  //       "Vous n'avez pas les droits pour supprimer une formation sur ce profil"
  //     );
  // }

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
module.exports = { createOne, getAll, getOne, updateOne, deleteOne };
