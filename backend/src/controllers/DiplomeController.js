const { findOneFreelancer } = require("../models/freelancer");
const {
  createOneDiploma,
  getAllDiplomabyFreelancerId,
  getOneDiplomabyFreelancerId,
  updateOneDiploma,
  deleteOneDiploma,
} = require("../models/diplome");
const { validateDiploma } = require("../utils/validate");

const createOne = async (req, res) => {
  // on récupère l'id du freelancer dans la requête
  const freelancerId = parseInt(req.params.freelancerid, 10);
  // on check si le freelancer existe et on renvoie une 404 si il n'existe pas
  const freelancer = await findOneFreelancer(freelancerId);
  if (!freelancer) {
    return res.status(404).send(`Freelancer #${freelancerId} not found.`);
  }

  // on check si les champs du diplome sont bons
  const error = validateDiploma(req.body, true);
  if (error) {
    console.error(error);
    return res.status(422).json(error.details);
  }

  try {
    const diplomacreated = await createOneDiploma({
      ...req.body,
      freelancerId,
    });
    return res.status(201).send(diplomacreated);
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de création de l'entrée diplôme" });
  }
};

const getAll = async (req, res) => {
  const freelancerId = parseInt(req.params.freelancerid, 10);
  try {
    const diplomalist = await getAllDiplomabyFreelancerId(freelancerId);
    return res.status(201).send(diplomalist);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Problème de lecture des diplômes" });
  }
};

const getOne = async (req, res) => {
  const freelancerId = parseInt(req.params.freelancerid, 10);
  const diplomeID = parseInt(req.params.id, 10);

  try {
    const diploma = await getOneDiplomabyFreelancerId(freelancerId, diplomeID);
    if (!diploma) {
      res.status(404).send("Aucun diplôme trouvé pour ce professionnel");
    } else {
      return res.status(201).send(diploma);
    }
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Problème de lecture du diplôme" });
  }
  return null;
};

const updateOne = async (req, res) => {
  const freelancerId = parseInt(req.params.freelancerid, 10);
  const diplomeID = parseInt(req.params.id, 10);

  // on check qu'un displome existe pour le couple freelancer/diplome
  const diploma = await getOneDiplomabyFreelancerId(freelancerId, diplomeID);

  if (!diploma) {
    res.status(404).send("Aucun diplôme correspondant pour ce professionnel");
  }

  // on check les erreurs de formulaire
  const error = validateDiploma(req.body, false);
  if (error) {
    console.error(error);
    return res.status(422).json(error.details);
  }

  try {
    const diplomaupdated = await updateOneDiploma(diploma.id, req.body);
    return res.status(201).send(diplomaupdated);
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de modification de l'entrée diplôme" });
  }
};

const deleteOne = async (req, res) => {
  const freelancerId = parseInt(req.params.freelancerid, 10);
  const diplomeID = parseInt(req.params.id, 10);

  // on check qu'un displome existe pour le couple freelancer/diplome
  const diploma = await getOneDiplomabyFreelancerId(freelancerId, diplomeID);

  if (!diploma) {
    res.status(404).send("Aucun diplôme correspondant pour ce professionnel");
  }

  try {
    await deleteOneDiploma(diploma.id);
    return res.status(200).send("Le diplôme a été supprimé avec succès");
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de suppression de l'entrée diplôme" });
  }
};
module.exports = { createOne, getAll, getOne, updateOne, deleteOne };
