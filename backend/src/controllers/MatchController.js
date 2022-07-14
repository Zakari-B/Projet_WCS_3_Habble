const {
  createOneMatchFreelancer,
  getAllMatchForAFreelancer,
} = require("../models/match");

const createOneFreelancerMatch = async (req, res) => {
  const annonceId = parseInt(req.params.annonceId, 10);
  const freelancerId = parseInt(req.params.freelancerId, 10);

  try {
    const matchCreated = await createOneMatchFreelancer({
      annonceId,
      freelancerId,
    });
    return res.status(201).json({ matchCreated });
  } catch (e) {
    console.warn(e);
    return res.status(500).json(e);
  }
};

const getAllMatchForFreelancer = async (req, res) => {
  const freelancerId = parseInt(req.params.freelancerId, 10);

  try {
    const matches = await getAllMatchForAFreelancer({
      freelancerId,
    });
    if (matches.length === 0) {
      return res
        .status(404)
        .send("Il n'y a pas encore de match pour ce freelancer");
    }
    return res.status(200).send(matches);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Problème de lecture des matchs " });
  }
};

module.exports = {
  getAllMatchForFreelancer,
  createOneFreelancerMatch,
  //   deleteOne,
  //   getOneByAnnonceId,
};
