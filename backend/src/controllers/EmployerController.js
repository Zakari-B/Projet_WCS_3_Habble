const employer = require("../models/employer");

const createOne = async (req, res) => {
  const userAccount = req.userCreated;
  if (userAccount.role !== "employer" && userAccount.role !== "freelancer") {
    res.status(400).send("Erreur : le rôle de l'utilisateur est incorrect");
  }
  if (userAccount.role === "employer") {
    try {
      const employerCreated = await employer.createOne({
        displayName: `${userAccount.firstname} ${userAccount.lastname}`,
        userId: userAccount.id,
        phone: "",
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

module.exports = { createOne };
