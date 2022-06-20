const { findOneFreelancer } = require("../models/freelancer");
const { createOneDiploma } = require("../models/diplome");
const { validateDiploma } = require("../utils/validate");
const { verifyAccessToken } = require("../helpers/jwtHelper");

const createOne = async (req, res) => {
  // on récupère l'id du freelancer dans la requête
  const freelancerId = parseInt(req.params.freelancerid, 10);
  // on check si le freelancer existe et on renvoie une 404 si il n'existe pas
  const freelancer = await findOneFreelancer(freelancerId);
  if (!freelancer) {
    return res.status(404).send(`Freelancer #${freelancerId} not found.`);
  }

  // on check si les champs du diplome sont bons
  const error = validateDiploma(req.body, false);
  if (error) {
    console.error(error);
    return res.status(422).json(error.details);
  }

  const freeId = await verifyAccessToken(req.cookies.userToken);

  // si tout est ok on va créer le diplome
  if (freeId !== freelancerId) {
    return res
      .status(401)
      .send("Vous n'avez pas les droits pour créer un diplôme sur ce profil");
  }

  try {
    const diplomacreated = await createOneDiploma({
      ...req.body,
      freelancerId: freeId.payload.fkId,
    });
    return res.status(201).send(diplomacreated);
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de création de l'entrée diplôme" });
  }
};

module.exports = { createOne };
