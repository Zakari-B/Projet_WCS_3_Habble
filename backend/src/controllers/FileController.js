const fs = require("fs");
const path = require("path");
const fileModel = require("../models/file");

exports.addOne = async (req, res) => {
  // CHANGER LE ID INSCRIT EN DUR UNE FOIS LA PR CORRESPONDANTE INTEGREE A DEV

  if (!req.file) {
    res.sendStatus(400);
  } else {
    const data = await fileModel.createOne({
      name: req.body.name,
      documentLink: req.file.filename,
      freelancerId: req.roleId,
      verified: false,
    });
    console.warn(data);
    res.sendStatus(200);
  }
};

exports.deleteOne = async (req, res) => {
  const id = parseInt(req.query.id, 10);
  const removed = await fileModel.deleteOne(id);

  await fs.promises.unlink(
    path.join(__dirname, `../../public/uploads/${removed.documentLink}`)
  );

  res.sendStatus(204);
};

exports.getAll = async (req, res) => {
  const data = await fileModel.getAll();

  const formatedData = data.map((img) => {
    const documentLink = `${req.protocol}://${req.get("host")}/uploads/${
      img.documentLink
    }`;

    return { ...img, documentLink };
  });

  res.json(formatedData);
};
