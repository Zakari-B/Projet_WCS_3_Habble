const { findOneFreelancer } = require("../models/freelancer");
const {
  getAllExperiencebyFreelancerId,
  getOneExperiencebyFreelancerId,
  createOneExperience,
  updateOneExperience,
  deleteOneExperience,
} = require("../models/experiencePro");
const { validateExperiencePro } = require("../utils/validate");

const createOne = async (req, res) => {
  // on récupère l'id du freelancer dans la requête
  const freelancerId = parseInt(req.params.freelancerid, 10);
  // on check si le freelancer existe et on renvoie une 404 si il n'existe pas
  const freelancer = await findOneFreelancer(freelancerId);
  if (!freelancer) {
    return res.status(404).send(`Freelancer #${freelancerId} not found.`);
  }

  // on check si les champs du diplome sont bons
  const error = validateExperiencePro(req.body, true);
  if (error) {
    console.error(error);
    return res.status(422).json(error.details);
  }

  try {
    const experienceCreated = await createOneExperience({
      ...req.body,
      freelancerId,
    });
    return res.status(201).send(experienceCreated);
  } catch (e) {
    console.error(e);
    return res.status(500).json({
      error: "Problème de création de l'entrée expérience professionnelle",
    });
  }
};

const getAll = async (req, res) => {
  const freelancerId = parseInt(req.params.freelancerid, 10);
  try {
    const experiencelist = await getAllExperiencebyFreelancerId(freelancerId);
    return res.status(201).send(experiencelist);
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de lecture des expériences professionnelles" });
  }
};

const getOne = async (req, res) => {
  const freelancerId = parseInt(req.params.freelancerid, 10);
  const experienceID = parseInt(req.params.id, 10);

  try {
    const diploma = await getOneExperiencebyFreelancerId(
      freelancerId,
      experienceID
    );
    if (!diploma) {
      res
        .status(404)
        .send(
          "Aucune expérience professionnelle trouvée pour ce professionnel"
        );
    } else {
      return res.status(201).send(diploma);
    }
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de lecture de l'expérience professionnelle" });
  }
  return null;
};

const updateOne = async (req, res) => {
  const freelancerId = parseInt(req.params.freelancerid, 10);
  const experienceID = parseInt(req.params.id, 10);

  // on check qu'un displome existe pour le couple freelancer/diplome
  const experience = await getOneExperiencebyFreelancerId(
    freelancerId,
    experienceID
  );

  if (!experience) {
    res
      .status(404)
      .send(
        "Aucune expérience professionnelle correspondant pour ce professionnel"
      );
  }

  // on check les erreurs de formulaire
  const error = validateExperiencePro(req.body, false);
  if (error) {
    console.error(error);
    return res.status(422).json(error.details);
  }

  try {
    const experienceUpdated = await updateOneExperience(
      experience.id,
      req.body
    );
    return res.status(201).send(experienceUpdated);
  } catch (e) {
    console.error(e);
    return res.status(500).json({
      error: "Problème de modification de l'entrée expérience professionnelle",
    });
  }
};

const deleteOne = async (req, res) => {
  const freelancerId = parseInt(req.params.freelancerid, 10);
  const experienceID = parseInt(req.params.id, 10);

  // on check qu'un displome existe pour le couple freelancer/expérience professionnelle
  const experience = await getOneExperiencebyFreelancerId(
    freelancerId,
    experienceID
  );

  if (!experience) {
    res
      .status(404)
      .send(
        "Aucune expérience professionnelle correspondant pour ce professionnel"
      );
  }

  try {
    await deleteOneExperience(experience.id);
    return res
      .status(200)
      .send("L'expérience professionnelle a été supprimée avec succès");
  } catch (e) {
    console.error(e);
    return res.status(500).json({
      error: "Problème de suppression de l'entrée expérience professionnelle",
    });
  }
};
module.exports = { createOne, getAll, getOne, updateOne, deleteOne };
