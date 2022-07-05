const { findOneFreelancer } = require("../models/freelancer");
// const { getOne } = require("../models/annonces") (à checker avec Lora)

const {
  createOneOffer,
  //   getAllDiplomabyFreelancerId,
  //   getOneDiplomabyFreelancerId,
  //   updateOneDiploma,
  //   deleteOneDiploma,
} = require("../models/offer");
const { validateOfferCreation } = require("../utils/validate");

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
  // retourne 409 si c'est le cas (à créer)

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

// const getAll = async (req, res) => {
//   const freelancerId = parseInt(req.params.freelancerid, 10);
//   try {
//     const diplomalist = await getAllDiplomabyFreelancerId(freelancerId);
//     return res.status(201).send(diplomalist);
//   } catch (e) {
//     console.error(e);
//     return res.status(500).json({ error: "Problème de lecture des diplômes" });
//   }
// };

// const getOne = async (req, res) => {
//   const freelancerId = parseInt(req.params.freelancerid, 10);
//   const diplomeID = parseInt(req.params.id, 10);

//   try {
//     const diploma = await getOneDiplomabyFreelancerId(freelancerId, diplomeID);
//     if (!diploma) {
//       res.status(404).send("Aucun diplôme trouvé pour ce professionnel");
//     } else {
//       return res.status(201).send(diploma);
//     }
//   } catch (e) {
//     console.error(e);
//     return res.status(500).json({ error: "Problème de lecture du diplôme" });
//   }
//   return null;
// };

// const updateOne = async (req, res) => {
//   const freelancerId = parseInt(req.params.freelancerid, 10);
//   const diplomeID = parseInt(req.params.id, 10);

//   // // on check les droits de mofification de formulaire
//   // const freeId = await verifyAccessToken(req.cookies.userToken);
//   // if (freeId.payload.fkId !== freelancerId) {
//   //   return res
//   //     .status(401)
//   //     .send(
//   //       "Vous n'avez pas les droits pour modifier un diplôme sur ce profil"
//   //     );
//   // }

//   // on check qu'un displome existe pour le couple freelancer/diplome
//   const diploma = await getOneDiplomabyFreelancerId(freelancerId, diplomeID);

//   if (!diploma) {
//     res
//       .status(404)
//       .send("Aucun diplôme diplôme correspondant pour ce professionnel");
//   }

//   // on check les erreurs de formulaire
//   const error = validateDiploma(req.body, false);
//   if (error) {
//     console.error(error);
//     return res.status(422).json(error.details);
//   }

//   try {
//     const diplomaupdated = await updateOneDiploma(diploma.id, req.body);
//     return res.status(201).send(diplomaupdated);
//   } catch (e) {
//     console.error(e);
//     return res
//       .status(500)
//       .json({ error: "Problème de modification de l'entrée diplôme" });
//   }
// };

// const deleteOne = async (req, res) => {
//   const freelancerId = parseInt(req.params.freelancerid, 10);
//   const diplomeID = parseInt(req.params.id, 10);

//   // on check les droits de mofification de formulaire
//   // const freeId = await verifyAccessToken(req.cookies.userToken);
//   // if (freeId.payload.fkId !== freelancerId) {
//   //   return res
//   //     .status(401)
//   //     .send(
//   //       "Vous n'avez pas les droits pour supprimer un diplôme sur ce profil"
//   //     );
//   // }

//   // on check qu'un displome existe pour le couple freelancer/diplome
//   const diploma = await getOneDiplomabyFreelancerId(freelancerId, diplomeID);

//   if (!diploma) {
//     res
//       .status(404)
//       .send("Aucun diplôme diplôme correspondant pour ce professionnel");
//   }

//   try {
//     await deleteOneDiploma(diploma.id);
//     return res.status(200).send("Le diplôme a été supprimé avec succès");
//   } catch (e) {
//     console.error(e);
//     return res
//       .status(500)
//       .json({ error: "Problème de suppression de l'entrée diplôme" });
//   }
// };
module.exports = { createOne };
