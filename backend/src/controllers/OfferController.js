const { findOneFreelancer } = require("../models/freelancer");
// const { getOne } = require("../models/annonces") (à checker avec Lora)

const {
  createOneOffer,
  getAllOffers,
  getAllForOneAnnonce,
  getOneOfferForOneAnnonceAndFreelancer,
  getOneOffer,
  updateOneOffer,
  deleteOneOffer,
} = require("../models/offer");
const {
  validateOfferCreation,
  validateOfferUpdate,
} = require("../utils/validate");

const getAll = async (req, res) => {
  try {
    const offerList = await getAllOffers();
    if (offerList.length === 0) {
      res.status(404).send("Il n'y a aucune annonce pour le moment");
    }
    return res.status(201).send(offerList);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Problème de lecture des offres" });
  }
};

const getAllForAnAnnonce = async (req, res) => {
  const annonceId = parseInt(req.params.annonceid, 10);

  // const annonce = await findOne(annonceId) (à checker avec Lora)
  //   if (!annonce) {
  //     return res.status(404).send(`L'annonce demandée n'existe pas`);
  //   }

  try {
    const annonceList = await getAllForOneAnnonce(annonceId);
    if (annonceList.length === 0) {
      res.status(404).send("Il n'y a aucune offre pour cette annonce");
    }
    return res.status(201).send(annonceList);
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de lecture des offres pour cette annonce" });
  }
};

const getOneOfferForOneAnnonceAndOneFreelancer = async (req, res) => {
  const freelancerId = parseInt(req.params.freelancerid, 10);
  const annonceId = parseInt(req.params.annonceid, 10);

  // on check si le freelancer existe et on renvoie une 404 si il n'existe pas
  const freelancer = await findOneFreelancer(freelancerId);
  if (!freelancer) {
    return res.status(404).send(`Freelancer #${freelancerId} not found.`);
  }

  // on check si l'annonce existe et on renvoie une 404 si elle n'existe pas

  // const annonce = await findOne(annonceId) (à checker avec Lora)
  //   if (!annonce) {
  //     return res.status(404).send(`L'annonce demandée n'existe pas`);
  //   }

  try {
    const annonceList = await getOneOfferForOneAnnonceAndFreelancer(
      freelancerId,
      annonceId
    );
    if (annonceList.length === 0) {
      res
        .status(404)
        .send("Il n'y a aucune offre pour cette annonce et ce freelancer");
    }
    return res.status(201).send(annonceList);
  } catch (e) {
    console.error(e);
    return res.status(500).json({
      error:
        "Problème de lecture des offres pour cette annonce et ce freelancer",
    });
  }
};

const createOne = async (req, res) => {
  // on récupère l'id du freelancer dans la requête
  const freelancerId = parseInt(req.params.freelancerid, 10);
  const annonceId = parseInt(req.params.annonceid, 10);

  // on check si le freelancer existe et on renvoie une 404 si il n'existe pas
  const freelancer = await findOneFreelancer(freelancerId);
  if (!freelancer) {
    return res.status(404).send(`Freelancer #${freelancerId} not found.`);
  }

  // on check si l'annonce existe et on renvoie une 404 si elle n'existe pas

  // const annonce = await findOne(annonceId) (à checker avec Lora)
  //   if (!annonce) {
  //     return res.status(404).send(`L'annonce demandée n'existe pas`);
  //   }

  // on check si une offre existe dejà pour ce freelancer et cette annonce
  const existingAnnonce = await getOneOfferForOneAnnonceAndFreelancer(
    freelancerId,
    annonceId
  );

  if (existingAnnonce.length > 0) {
    return res
      .status(409)
      .send("Vous ne pouvez pas proposer plusieurs offres pour une annonce");
  }

  // on check si les champs du diplome sont bons
  const error = validateOfferCreation(req.body, true);
  if (error) {
    console.error(error);
    return res.status(422).json(error.details);
  }

  try {
    const offercreated = await createOneOffer({
      ...req.body,
      freelancerId,
      annonceId,
    });
    return res.status(201).send(offercreated);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Problème de création de l'offre" });
  }
};

const getOne = async (req, res) => {
  const id = parseInt(req.params.id, 10);

  try {
    const offer = await getOneOffer(id);
    if (!offer) {
      res.status(404).send("Aucune offre trouvée ");
    } else {
      return res.status(201).send(offer);
    }
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Problème de lecture de l'offre" });
  }
  return null;
};

const updateOne = async (req, res) => {
  const offerId = parseInt(req.params.id, 10);

  // on check qu'un displome existe pour le couple freelancer/diplome
  const offer = await getOneOffer(offerId);

  if (!offer) {
    res
      .status(404)
      .send("Aucun diplôme diplôme correspondant pour ce professionnel");
  }

  // on check les erreurs de formulaire
  const error = validateOfferUpdate(req.body, false);
  if (error) {
    console.error(error);
    return res.status(422).json(error.details);
  }

  try {
    const offerUpdated = await updateOneOffer(offerId, req.body);
    return res.status(201).send(offerUpdated);
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de modification de l'entrée offre" });
  }
};

const deleteOne = async (req, res) => {
  const offerId = parseInt(req.params.id, 10);

  const offer = await getOneOffer(offerId);

  if (!offer) {
    res.status(404).send("Aucune offre n'existe");
  }

  try {
    await deleteOneOffer(offerId);
    return res.status(200).send("L'offre a été retirée avec succès");
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de suppression de l'entrée offre" });
  }
};
module.exports = {
  createOne,
  getAll,
  getAllForAnAnnonce,
  getOneOfferForOneAnnonceAndOneFreelancer,
  getOne,
  updateOne,
  deleteOne,
};
