const fs = require("fs");
const path = require("path");
const PictureFreelancerModel = require("../models/PictureFreelancer");
const { findOneFreelancer } = require("../models/freelancer");
const { validateFreelancer } = require("../utils/validate");

exports.updateOne = async (req, res) => {
  const freelancerId = parseInt(req.params.freelancerid, 10);
  const error = validateFreelancer(req.body, false);
  if (error) {
    console.error(error);
    return res.status(422).json(error.details);
  }

  const myfreelancer = await findOneFreelancer(freelancerId);
  if (!myfreelancer) {
    return res.status(404).send(`Freelancer #${freelancerId} not found.`);
  }

  try {
    if (myfreelancer.picture === "") {
      const pictureFreelancerModify =
        await PictureFreelancerModel.updateOnePictureFreelancer({
          freelancerId,
          picture: req.file.filename,
        });
      return res.status(200).json(pictureFreelancerModify);
    }
    if (myfreelancer.picture !== req.file.filename) {
      await fs.promises.unlink(
        path.join(__dirname, `../../public/uploads/${myfreelancer.picture}`)
      );
      const pictureFreelancerModify =
        await PictureFreelancerModel.updateOnePictureFreelancer({
          freelancerId,
          picture: req.file.filename,
        });
      return res.status(200).json(pictureFreelancerModify);
    }
    return res
      .status(500)
      .json({ error: "Problème de mise à jour de la photo" });
  } catch (e) {
    return res
      .status(500)
      .json({ error: "Problème de mise à jour du freelancer" });
  }
};

exports.removeOne = async (req, res) => {
  const freelancerId = parseInt(req.params.freelancerid, 10);

  const myfreelancer = await findOneFreelancer(freelancerId);
  if (!myfreelancer) {
    return res.status(404).send(`Freelancer #${freelancerId} not found.`);
  }

  try {
    await fs.promises.unlink(
      path.join(__dirname, `../../public/uploads/${myfreelancer.picture}`)
    );
    const pictureFreelancerModify =
      await PictureFreelancerModel.updateOnePictureFreelancer({
        freelancerId,
        picture: "",
      });
    return res.status(200).json(pictureFreelancerModify);
  } catch (e) {
    return res
      .status(500)
      .json({ error: "Problème de mise à jour du freelancer" });
  }
};
