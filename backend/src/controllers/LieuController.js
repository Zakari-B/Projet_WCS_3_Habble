// const { findOneFreelancer } = require("../models/freelancer");
const {
  createOneLocation,
  getAllLocations,
  //   getAllLocationsbyAnnonceId,
  //   updateOneLocation,
  //   deleteOneLocation,
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

// const getAllByAnnonce = async (req, res) => {
//   const annonceId = parseInt(req.params.annonceid, 10);
//   try {
//     const locationlist = await getAllLocationsbyAnnonceId(annonceId);
//     return res.status(201).send(locationlist);
//   } catch (e) {
//     console.error(e);
//     return res.status(500).json({ error: "Problème de lecture des lieux" });
//   }
// };

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
//   const error = validateLocation(req.body, false);
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
module.exports = { createOne, getAll };
