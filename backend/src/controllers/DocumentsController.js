const fs = require("fs");
const path = require("path");
const {
  getAllDocumentsByFreelancerId,
  getAllDocumentsByCoordinatorId,
  getAllDocumentsByCooordinatorIdAndFamilyId,
  getOneDocumentByFreelancerId,
  getOneDocumentByCoordinatorId,
  getOneDocumentByCoordinatorIdAndFamilyId,
  deleteOneDocument,
  verifyOneDocument,
} = require("../models/documents");

const getAll = async (req, res) => {
  let freelancerId = 0;
  if (req.params.freelancerid) {
    freelancerId = parseInt(req.params.freelancerid, 10);
  }
  try {
    const docList = await getAllDocumentsByFreelancerId(freelancerId);
    return res.status(200).send(docList);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Problème de lecture des documents" });
  }
};

const getAllByCoordinatorId = async (req, res) => {
  const coordinatorId = parseInt(req.roleId, 10);
  try {
    const docList = await getAllDocumentsByCoordinatorId(coordinatorId);
    return res.status(200).send(docList);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Problème de lecture des documents" });
  }
};

const getAllByFamilyId = async (req, res) => {
  const familyId = parseInt(req.params.familyId, 10);
  const coordinatorId = parseInt(req.roleId, 10);

  try {
    const docList = await getAllDocumentsByCooordinatorIdAndFamilyId(
      coordinatorId,
      familyId
    );
    return res.status(200).send(docList);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Problème de lecture des documents" });
  }
};

const deleteOne = async (req, res) => {
  const freelancerId = parseInt(req.params.freelancerid, 10);
  const documentID = parseInt(req.params.id, 10);

  const document = await getOneDocumentByFreelancerId(freelancerId, documentID);

  if (!document) {
    res.status(404).send("Aucun document correspondant pour ce professionnel");
  }

  try {
    const removedDoc = await deleteOneDocument(documentID);
    await fs.promises.unlink(
      path.join(__dirname, `../../public/uploads/${removedDoc.documentLink}`)
    );
    return res.status(200).send("Le document a été supprimé avec succès");
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de suppression de l'entrée document" });
  }
};

const deleteOneByCoordinatorId = async (req, res) => {
  const coordinatorId = parseInt(req.params.coordinatorid, 10);
  const documentID = parseInt(req.params.id, 10);

  const document = await getOneDocumentByCoordinatorId(
    coordinatorId,
    documentID
  );

  if (!document) {
    return res
      .status(404)
      .send("Aucun document correspondant pour ce professionnel");
  }

  try {
    const removedDoc = await deleteOneDocument(documentID);
    await fs.promises.unlink(
      path.join(__dirname, `../../public/uploads/${removedDoc.documentLink}`)
    );
    return res.status(200).send("Le document a été supprimé avec succès");
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de suppression de l'entrée document" });
  }
};

const deleteOneByFamily = async (req, res) => {
  const coordinatorId = parseInt(req.roleId, 10);
  const documentID = parseInt(req.params.id, 10);
  const familyId = parseInt(req.params.familyId, 10);

  const document = await getOneDocumentByCoordinatorIdAndFamilyId(
    coordinatorId,
    familyId,
    documentID
  );

  if (!document) {
    res.status(404).send("Aucun document correspondant pour ce professionnel");
  }

  try {
    const removedDoc = await deleteOneDocument(document.id);
    await fs.promises.unlink(
      path.join(__dirname, `../../public/uploads/${removedDoc.documentLink}`)
    );
    return res.status(200).send("Le document a été supprimé avec succès");
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de suppression de l'entrée document" });
  }
};

const verify = async (req, res) => {
  const { verified } = req.body;
  const docId = parseInt(req.params.docId, 10);
  try {
    const verifiedDoc = await verifyOneDocument(docId, verified);
    return res.status(200).send(verifiedDoc);
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème rencontré lors de la vérification" });
  }
};

module.exports = {
  getAll,
  getAllByCoordinatorId,
  getAllByFamilyId,
  deleteOne,
  deleteOneByCoordinatorId,
  deleteOneByFamily,
  verify,
};
