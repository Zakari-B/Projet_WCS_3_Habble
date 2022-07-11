const fs = require("fs");
const path = require("path");
const {
  getAllDocumentsByFreelancerId,
  getAllDocumentsByFreelancerIdAndFamilyId,
  getOneDocumentByFreelancerId,
  getOneDocumentByCoordinatorIdAndFamilyId,
  deleteOneDocument,
} = require("../models/documents");

const getAll = async (req, res) => {
  let freelancerId = 0;
  if (req.params.freelancerid) {
    freelancerId = parseInt(req.params.freelancerid, 10);
  }
  if (req.params.coordinatorId) {
    freelancerId = parseInt(req.params.coordinatorId, 10);
  }
  try {
    const docList = await getAllDocumentsByFreelancerId(freelancerId);
    return res.status(200).send(docList);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Problème de lecture des documents" });
  }
};

const getAllByFamilyId = async (req, res) => {
  const familyId = parseInt(req.params.familyId, 10);
  const freelancerId = parseInt(req.params.coordinatorId, 10);

  try {
    const docList = await getAllDocumentsByFreelancerIdAndFamilyId(
      freelancerId,
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

const deleteOneByFamily = async (req, res) => {
  const freelancerId = parseInt(req.roleId, 10);
  const documentID = parseInt(req.params.id, 10);
  const familyId = parseInt(req.params.familyId, 10);
  // console.log(`coordinator: ${freelancerId}`);
  // console.log(`document: ${documentID}`);
  // console.log(`family: ${familyId}`);

  const document = await getOneDocumentByCoordinatorIdAndFamilyId(
    freelancerId,
    familyId,
    documentID
  );

  // console.log(document);

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

module.exports = { getAll, getAllByFamilyId, deleteOne, deleteOneByFamily };
