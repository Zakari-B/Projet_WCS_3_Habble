const {
  createOneExpertise,
  getAllExpertise,
  getOneExpertise,
  updateOneExpertise,
  deleteOneExpertise,
} = require("../models/expertise");

const createOne = async (req, res) => {
  try {
    const expertiseCreated = await createOneExpertise(req.body);
    return res.status(201).send(expertiseCreated);
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de création de l'expertise" });
  }
};

const getAll = async (req, res) => {
  try {
    const expertises = await getAllExpertise();
    if (!expertises) {
      return res.status(404).send(`There are no expertises yet`);
    }
    return res.status(200).json(expertises);
  } catch (e) {
    return res
      .status(500)
      .json({ error: "Problème de lecture des expertises" });
  }
};

const getOne = async (req, res) => {
  const expertiseID = parseInt(req.params.id, 10);

  try {
    const expertise = await getOneExpertise(expertiseID);
    if (!expertise) {
      res.status(404).send("Aucune expertise trouvée");
    } else {
      return res.status(201).send(expertise);
    }
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de lecture de l'expertise" });
  }
  return null;
};

const updateOne = async (req, res) => {
  const expertiseID = parseInt(req.params.id, 10);

  try {
    const expertiseUpdated = await updateOneExpertise(expertiseID, req.body);
    return res.status(201).send(expertiseUpdated);
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de modification de l'entrée expertise" });
  }
};

const deleteOne = async (req, res) => {
  const expertiseID = parseInt(req.params.id, 10);

  try {
    await deleteOneExpertise(expertiseID);
    return res.status(200).send("L'expertise a été supprimée avec succès");
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de suppression de l'entrée expertise" });
  }
};
module.exports = { createOne, getAll, getOne, updateOne, deleteOne };
