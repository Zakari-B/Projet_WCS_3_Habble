const fs = require("fs");
const path = require("path");
const PictureCoordinatorModel = require("../models/PictureCoordinator");
const { findOneCoordinator } = require("../models/coordinator");
const { validateCoordinator } = require("../utils/validate");

exports.updateOne = async (req, res) => {
  const coordinatorId = parseInt(req.params.coordinatorid, 10);

  const error = validateCoordinator(req.body, false);
  if (error) {
    console.error(error);
    return res.status(422).json(error.details);
  }

  const mycoordinator = await findOneCoordinator(coordinatorId);
  if (!mycoordinator) {
    return res.status(404).send(`Coordinator #${coordinatorId} not found.`);
  }

  try {
    if (mycoordinator.picture === "") {
      const pictureCoordinatorModify =
        await PictureCoordinatorModel.updateOnePictureCoordinator({
          coordinatorId,
          picture: req.file.filename,
        });
      return res.status(200).json(pictureCoordinatorModify);
    }
    if (mycoordinator.picture !== req.file.filename) {
      await fs.promises.unlink(
        path.join(__dirname, `../../public/uploads/${mycoordinator.picture}`)
      );
      const pictureCoordinatorModify =
        await PictureCoordinatorModel.updateOnePictureCoordinator({
          coordinatorId,
          picture: req.file.filename,
        });
      return res.status(200).json(pictureCoordinatorModify);
    }
    return res
      .status(500)
      .json({ error: "Problème de mise à jour de la photo" });
  } catch (e) {
    return res
      .status(500)
      .json({ error: "Problème de mise à jour du coordinateur" });
  }
};

exports.removeOne = async (req, res) => {
  const coordinatorId = parseInt(req.params.id, 10);

  const mycoordinator = await findOneCoordinator(coordinatorId);
  if (!mycoordinator) {
    return res.status(404).send(`Employer #${coordinatorId} not found.`);
  }

  try {
    await fs.promises.unlink(
      path.join(__dirname, `../../public/uploads/${mycoordinator.picture}`)
    );
    const pictureCoordinatorModify =
      await PictureCoordinatorModel.updateOnePictureCoordinator({
        coordinatorId,
        picture: "",
      });
    return res.status(200).json(pictureCoordinatorModify);
  } catch (e) {
    return res
      .status(500)
      .json({ error: "Problème de mise à jour du coordinateur" });
  }
};
