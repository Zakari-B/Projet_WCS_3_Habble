const { findOneEmployer } = require("../models/employer");
const {
  createOneAnnouncement,
  getAllAnnouncementsbyEmployerId,
  getAllAnnouncements,
  getOneAnnouncementByEmployerId,
  getOneAnnouncement,
  //   getOneDiplomabyFreelancerId,
  //   updateOneDiploma,
  //   deleteOneDiploma,
} = require("../models/annonce");
const { validateAnnouncement } = require("../utils/validate");
// const { verifyAccessToken } = require("../helpers/jwtHelper");

const createOne = async (req, res) => {
  // on récupère l'id du freelancer dans la requête
  const employerId = parseInt(req.params.employerid, 10);
  // on check si le freelancer existe et on renvoie une 404 si il n'existe pas
  const employer = await findOneEmployer(employerId);
  if (!employer) {
    return res.status(404).send(`Employer #${employerId} not found.`);
  }

  // on check si les champs du diplome sont bons
  const error = validateAnnouncement(req.body, true);
  if (error) {
    console.error(error);
    return res.status(422).json(error.details);
  }

  try {
    const announcementcreated = await createOneAnnouncement({
      ...req.body,
      employerId,
    });
    return res.status(201).send(announcementcreated);
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de création de l'entrée annonce" });
  }
};

const getAllByEmployerId = async (req, res) => {
  const employerId = parseInt(req.params.employerid, 10);
  try {
    const announcementslist = await getAllAnnouncementsbyEmployerId(employerId);
    if (!announcementslist) {
      return res.status(404).send("Il n'y a pas encore d'activité");
    }
    return res.status(200).send(announcementslist);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Problème de lecture des annonces" });
  }
};

const getAll = async (req, res) => {
  try {
    const announcements = await getAllAnnouncements();
    if (!announcements) {
      return res.status(404).send("Il n'y a pas encore d'activité");
    }
    return res.status(200).send(announcements);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Problème de lecture des annonces" });
  }
};

const getOneByEmployerId = async (req, res) => {
  const employerId = parseInt(req.params.employerid, 10);
  const annonceId = parseInt(req.params.id, 10);

  try {
    const announcement = await getOneAnnouncementByEmployerId(
      employerId,
      annonceId
    );
    if (announcement.length === 0) {
      res.status(404).send("Il n'y a pas encore d'activité");
    } else {
      return res.status(201).send(announcement);
    }
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Problème de lecture de l'annonce" });
  }
  return null;
};

const getOne = async (req, res) => {
  const annonceId = parseInt(req.params.id, 10);
  try {
    const announcement = await getOneAnnouncement(annonceId);
    if (announcement.length === 0) {
      res.status(404).send("Cette annonce n'existe pas");
    } else {
      return res.status(201).send(announcement);
    }
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Problème de lecture de l'annonce" });
  }
  return null;
};
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
module.exports = {
  createOne,
  getAllByEmployerId,
  getAll,
  getOneByEmployerId,
  getOne,
};
// getOne, updateOne, deleteOne
