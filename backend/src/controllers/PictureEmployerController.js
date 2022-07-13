const fs = require("fs");
const path = require("path");
const PictureEmployerModel = require("../models/PictureEmployer");
const { findOneEmployer } = require("../models/employer");
const { validateEmployer } = require("../utils/validate");

exports.updateOne = async (req, res) => {
  const employerId = parseInt(req.params.id, 10);
  const error = validateEmployer(req.body, false);
  if (error) {
    console.error(error);
    return res.status(422).json(error.details);
  }

  const myemployer = await findOneEmployer(employerId);
  if (!myemployer) {
    return res.status(404).send(`Employer #${employerId} not found.`);
  }

  try {
    if (myemployer.picture === "") {
      const pictureEmployerModify =
        await PictureEmployerModel.updateOnePictureEmployer({
          employerId,
          picture: req.file.filename,
        });
      return res.status(200).json(pictureEmployerModify);
    }
    if (myemployer.picture !== req.file.filename) {
      await fs.promises.unlink(
        path.join(__dirname, `../../public/uploads/${myemployer.picture}`)
      );
      const pictureEmployerModify =
        await PictureEmployerModel.updateOnePictureEmployer({
          employerId,
          picture: req.file.filename,
        });
      return res.status(200).json(pictureEmployerModify);
    }
    return res
      .status(500)
      .json({ error: "Problème de mise à jour de la photo" });
  } catch (e) {
    return res
      .status(500)
      .json({ error: "Problème de mise à jour de l'employeur" });
  }
};

exports.removeOne = async (req, res) => {
  const employerId = parseInt(req.params.id, 10);

  const myemployer = await findOneEmployer(employerId);
  if (!myemployer) {
    return res.status(404).send(`Employer #${employerId} not found.`);
  }

  try {
    await fs.promises.unlink(
      path.join(__dirname, `../../public/uploads/${myemployer.picture}`)
    );
    const pictureEmployerModify =
      await PictureEmployerModel.updateOnePictureEmployer({
        employerId,
        picture: "",
      });
    return res.status(200).json(pictureEmployerModify);
  } catch (e) {
    return res
      .status(500)
      .json({ error: "Problème de mise à jour de l'employeur" });
  }
};
