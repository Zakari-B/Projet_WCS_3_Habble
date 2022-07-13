const {
  createOneEmployer,
  findOneEmployer,
  getAllEmployers,
  updateOneEmployer,
  getUserFromEmployer,
} = require("../models/employer");

const { validateEmployer } = require("../utils/validate");

exports.createOne = async (req, res) => {
  const userAccount = req.userCreated;
  if (
    userAccount.role !== "employer" &&
    userAccount.role !== "freelancer" &&
    userAccount.role !== "coordinator"
  ) {
    return res
      .status(400)
      .send("Erreur : le rôle de l'utilisateur est incorrect");
  }
  if (userAccount.role === "employer") {
    try {
      const employerCreated = await createOneEmployer({
        displayName: `${userAccount.firstname} ${userAccount.lastname}`,
        userId: userAccount.id,
        description: "",
        phone: "",
        available: false,
        picture: "",
      });
      return res.status(201).send({ userAccount, employerCreated });
    } catch (e) {
      return res
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
    const employerModify = await updateOneEmployer(employerId, req.body);
    return res.status(200).json(employerModify);
  } catch (e) {
    return res
      .status(500)
      .json({ error: "Problème de mise à jour de l'employer" });
  }
};

exports.getUserFromEmployer = async (req, res) => {
  const employerId = parseInt(req.params.id, 10);

  try {
    const userId = await findOneEmployer(employerId);

    const employer = await getUserFromEmployer(userId.userId);

    return res.status(200).json(employer);
  } catch (e) {
    return res
      .status(500)
      .json({ error: "Problème de mise à jour de l'employer" });
  }
};
