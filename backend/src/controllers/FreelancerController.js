const {
  getAllFreelancers,
  createOneFreelancer,
  updateOneFreelancer,
  findOneFreelancer,
  getAllFreelancersProfileInfo,
  getUserfromfreelancer,
} = require("../models/freelancer");

const { validateFreelancer } = require("../utils/validate");

exports.getAll = async (req, res) => {
  try {
    const freelancers = await getAllFreelancers();
    if (!freelancers) {
      return res.status(404).send(`There are no freelancers yet`);
    }
    return res.status(200).json(freelancers);
  } catch (e) {
    return res
      .status(500)
      .json({ error: "Problème de lecture des freelancers" });
  }
};

exports.getOne = async (req, res) => {
  const freelancerId = parseInt(req.params.id, 10);
  try {
    const freelancer = await getAllFreelancersProfileInfo(freelancerId);
    if (!freelancer) {
      return res.status(404).send(`Freelancer #${freelancerId} not found.`);
    }
    return res.status(200).json(freelancer);
  } catch (e) {
    return res
      .status(500)
      .json({ error: "Problème de lecture des freelancers" });
  }
};

exports.createOne = async (req, res, next) => {
  const userAccount = req.userCreated;
  if (userAccount.role === "freelancer") {
    try {
      const freelancerCreated = await createOneFreelancer({
        displayName: `${userAccount.firstname} ${userAccount.lastname}`,
        activityDescription: "",
        userId: userAccount.id,
        zipCode: "",
        phone: "",
        experienceYear: 0,
        price: 0.0,
        description: "",
        acceptEmails: false,
        siret: 0,
        available: false,
        picture: "",
      });
      return res.status(201).send({ userAccount, freelancerCreated });
    } catch (e) {
      return res
        .status(500)
        .json({ error: "Problème de création de l'entrée freelancer" });
    }
  } else {
    next();
  }
  return null;
};

exports.updateOne = async (req, res) => {
  const freelancerId = parseInt(req.params.id, 10);
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
    const freelancerModify = await updateOneFreelancer(freelancerId, req.body);
    return res.status(200).json(freelancerModify);
  } catch (e) {
    return res
      .status(500)
      .json({ error: "Problème de mise à jour du freelancer" });
  }
};

exports.getUser = async (req, res) => {
  const freelancerId = parseInt(req.params.id, 10);

  try {
    const freelancer = await findOneFreelancer(freelancerId);
    const user = await getUserfromfreelancer(freelancer.userId);
    return res.status(200).json(user);
  } catch (e) {
    return res
      .status(500)
      .json({ error: "Problème de mise à jour du freelancer" });
  }
};
