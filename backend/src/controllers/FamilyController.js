const { findOneCoordinator } = require("../models/coordinator");
const {
  getAllFamilybyCoordinatorId,
  getOneFamilybyCoordinatorId,
  createOneFamily,
  updateOneFamily,
  deleteOneFamily,
} = require("../models/family");
const { validateFamily } = require("../utils/validate");

const createOne = async (req, res) => {
  // on récupère l'id du freelancer dans la requête
  const coordinatorId = parseInt(req.roleId, 10);
  // on check si le freelancer existe et on renvoie une 404 si il n'existe pas
  const coordinator = await findOneCoordinator(coordinatorId);
  if (!coordinator) {
    return res.status(404).send(`Freelancer #${coordinatorId} not found.`);
  }

  // on check si les champs du diplome sont bons
  const error1 = validateFamily(req.body, true);
  if (error1) {
    console.error(error1);
    return res.status(422).json(error1.details);
  }

  try {
    const familycreated = await createOneFamily({
      ...req.body,
      coordinatorId,
    });
    return res.status(201).send(familycreated);
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de création de l'entrée famille" });
  }
};

const getAll = async (req, res) => {
  const coordinatorId = parseInt(req.params.coordinatorid, 10);
  try {
    const familylist = await getAllFamilybyCoordinatorId(coordinatorId);
    return res.status(201).send(familylist);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Problème de lecture des familles" });
  }
};

const getOne = async (req, res) => {
  const coordinatorId = parseInt(req.params.coordinatorid, 10);
  const familyID = parseInt(req.params.id, 10);

  try {
    const family = await getOneFamilybyCoordinatorId(coordinatorId, familyID);
    if (!family) {
      res.status(404).send("Aucune famille trouvé pour ce coordinateur");
    } else {
      return res.status(201).send(family);
    }
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Problème de lecture de la famille" });
  }
  return null;
};

const updateOne = async (req, res) => {
  const coordinatorId = parseInt(req.params.coordinatorid, 10);
  const familyID = parseInt(req.params.id, 10);

  // on check qu'un displome existe pour le couple freelancer/diplome
  const family = await getOneFamilybyCoordinatorId(coordinatorId, familyID);

  if (!family) {
    res.status(404).send("Aucune famille correspondante pour ce coordinateur");
  }

  // on check les erreurs de formulaire
  const error = validateFamily(req.body, false);
  if (error) {
    console.error(error);
    return res.status(422).json(error.details);
  }

  try {
    const familyupdated = await updateOneFamily(family.id, req.body);
    return res.status(201).send(familyupdated);
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de modification de l'entrée famille" });
  }
};

const deleteOne = async (req, res) => {
  const coordinatorId = parseInt(req.params.coordinatorid, 10);
  const familyID = parseInt(req.params.id, 10);

  // on check qu'un displome existe pour le couple freelancer/diplome
  const family = await getOneFamilybyCoordinatorId(coordinatorId, familyID);

  if (!family) {
    res.status(404).send("Aucune famille correspondante pour ce coordinateur");
  }

  try {
    await deleteOneFamily(family.id);
    return res.status(200).send("La famille a été supprimée avec succès");
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de suppression de l'entrée familly" });
  }
};
module.exports = { createOne, getAll, getOne, updateOne, deleteOne };
