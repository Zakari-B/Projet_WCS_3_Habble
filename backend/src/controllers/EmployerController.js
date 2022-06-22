const {
  createOneEmployer,
  findOneEmployer,
  getAllEmployers,
} = require("../models/employer");

exports.createOne = async (req, res) => {
  const userAccount = req.userCreated;
  if (userAccount.role !== "employer" && userAccount.role !== "freelancer") {
    res.status(400).send("Erreur : le rôle de l'utilisateur est incorrect");
  }
  if (userAccount.role === "employer") {
    try {
      const employerCreated = await createOneEmployer({
        displayName: `${userAccount.firstname} ${userAccount.lastname}`,
        userId: userAccount.id,
        description: "",
        available: false,
        picture: "",
      });
      res.status(201).send({ userAccount, employerCreated });
    } catch (e) {
      res
        .status(500)
        .json({ error: "Problème de création de l'entrée employeur" });
    }
  }
  return null;
};

exports.getOne = async (req, res) => {
  const employerId = parseInt(req.params.id, 10);
  try {
    const myemployer = await findOneEmployer(employerId);
    if (!myemployer) {
      return res.status(404).send(`Employer #${employerId} not found.`);
    }
    return res.status(200).json(myemployer);
  } catch (e) {
    return res.status(500).json({ error: "Problème de lecture des employers" });
  }
};

exports.getAll = async (req, res) => {
  try {
    const employers = await getAllEmployers();
    if (!employers) {
      return res.status(404).send(`There are no employers yet`);
    }
    return res.status(200).json(employers);
  } catch (e) {
    return res.status(500).json({ error: "Problème de lecture des employers" });
  }
};
