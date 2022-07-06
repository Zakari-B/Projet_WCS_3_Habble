const { findOneEmployer } = require("../models/employer");
const {
  createOneAnnouncement,
  getAllAnnouncementsbyEmployerId,
  getAllAnnouncements,
  getOneAnnouncementByEmployerId,
  updateOneAnnouncement,
  deleteOneAnnouncement,
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

  //   const emplId = await verifyAccessToken(req.cookies.userToken);

  //   // si tout est ok on va créer le diplome
  //   if (emplId.payload.fkId !== employerId) {
  //     return res
  //       .status(401)
  //       .send("Vous n'avez pas les droits pour créer un diplôme sur ce profil");
  //   }

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

// const updateOne = async (req, res) => {
//   const employerId = parseInt(req.params.employerid, 10);
//   const annonceId = parseInt(req.params.id, 10);
//   const annonce = await getOneAnnouncementByEmployerId(employerId, annonceId);

//   if (!annonce) {
//     return res
//       .status(404)
//       .send("Aucune annonce correspondante pour cette personne");
//   }

//   // on check les erreurs de formulaire
//   const error = validateAnnouncement(req.body, true);
//   if (error) {
//     console.error(error);
//     return res.status(422).json(error.details);
//   }

//   try {
//     const annonceupdated = await updateOneAnnouncement(annonce.id, req.body);
//     return res.status(201).send(annonceupdated);
//   } catch (e) {
//     console.error(e);
//     return res
//       .status(500)
//       .json({ error: "Problème de modification de l'entrée annonce" });
//   }
// };

const getAllByEmployerId = async (req, res) => {
  const employerId = parseInt(req.params.employerid, 10);
  try {
    const announcementslist = await getAllAnnouncementsbyEmployerId(employerId);
    if (announcementslist.length === 0) {
      res.status(404).send("Il n'y a pas encore d'activité");
    } else {
      return res.status(201).send(announcementslist);
    }
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Problème de lecture des annonces" });
  }
  return null;
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
    if (!announcement) {
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
const updateOne = async (req, res) => {
  const employerId = parseInt(req.params.employerid, 10);
  const annonceId = parseInt(req.params.id, 10);

  const annonce = await getOneAnnouncementByEmployerId(employerId, annonceId);

  if (annonce.length === 0) {
    res.status(404).send("Il n'y a pas d'activité correspondante");
  }

  // on check les erreurs de formulaire
  const error = validateAnnouncement(req.body, false);
  if (error) {
    console.error(error);
    return res.status(422).json(error.details);
  }

  try {
    const announcementUpdated = await updateOneAnnouncement(
      employerId,
      annonceId,
      { ...req.body }
    );
    return res.status(201).send(announcementUpdated);
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de modification de l'entrée annonce" });
  }
};

const deleteOne = async (req, res) => {
  const employerId = parseInt(req.params.freelancerid, 10);
  const annonceId = parseInt(req.params.id, 10);

  const annonce = await getOneAnnouncementByEmployerId(employerId, annonceId);

  if (annonce.length === 0) {
    res.status(404).send("Il n'y a pas d'activité correspondante");
  }

  try {
    await deleteOneAnnouncement(annonce.id);
    return res.status(200).send("L'annonce a été supprimée avec succès");
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de suppression de l'entrée annonce" });
  }
};

module.exports = {
  createOne,
  getAllByEmployerId,
  getAll,
  getOneByEmployerId,
  updateOne,
  deleteOne,
};
// getOne, updateOne, deleteOne
