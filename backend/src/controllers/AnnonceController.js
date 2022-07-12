const { findOneEmployer } = require("../models/employer");
const {
  createOneAnnouncement,
  getAllAnnouncementsbyEmployerId,
  getAllAnnouncements,
  getOneAnnouncementByEmployerId,
  getOneAnnouncement,
  getOneAnnonceWithCity,
  updateOneAnnouncement,
  deleteOneAnnouncement,
} = require("../models/annonce");
const { validateAnnouncement } = require("../utils/validate");

const createOne = async (req, res) => {
  const employerId = parseInt(req.params.employerid, 10);
  const employer = await findOneEmployer(employerId);
  if (!employer) {
    return res.status(404).send(`Employer #${employerId} not found.`);
  }

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
    if (announcementslist.length === 0) {
      return res.status(404).send("Il n'y a pas encore d'activité");
    }
    return res.status(201).send(announcementslist);
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
      return res.status(404).send("Il n'y a pas encore d'activité");
    }
    return res.status(201).send(announcement);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Problème de lecture de l'annonce" });
  }
};

const getOne = async (req, res) => {
  const annonceId = parseInt(req.params.id, 10);
  try {
    const announcement = await getOneAnnouncement(annonceId);
    if (!announcement) {
      return res.status(404).send("Cette annonce n'existe pas");
    }
    return res.status(201).send(announcement);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Problème de lecture de l'annonce" });
  }
};

const getOneAnnonceWithCityInfo = async (req, res) => {
  const annonceId = parseInt(req.params.annonceId, 10);
  try {
    const annonce = await getOneAnnonceWithCity(annonceId);
    if (!annonce) {
      return res.status(404).send(`Annonce #${annonceId} not found.`);
    }
    return res.status(200).json(annonce);
  } catch (e) {
    console.warn(e);
    return res.status(500).json({ error: "Problème de lecture des annonces" });
  }
};

const updateOne = async (req, res) => {
  const employerId = parseInt(req.params.employerid, 10);
  const annonceId = parseInt(req.params.id, 10);

  const annonce = await getOneAnnouncementByEmployerId(employerId, annonceId);

  if (annonce.length === 0) {
    return res.status(404).send("Il n'y a pas d'activité correspondante");
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
  const employerId = parseInt(req.params.employerid, 10);
  const annonceId = parseInt(req.params.id, 10);

  const annonce = await getOneAnnouncementByEmployerId(employerId, annonceId);

  if (annonce.length === 0) {
    return res.status(404).send("Il n'y a pas d'activité correspondante");
  }

  try {
    await deleteOneAnnouncement(employerId, annonceId);
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
  getOneAnnonceWithCityInfo,
  getOne,
  updateOne,
  deleteOne,
};
