const {
  getAllFreelancers,
  createOne,
  updateOne,
} = require("../models/freelancer");

exports.getAll = async (req, res) => {
  try {
    const freelancers = await getAllFreelancers();
    return res.status(200).json(freelancers);
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
      const freelancerCreated = await createOne({
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
      res.status(201).send({ userAccount, freelancerCreated });
    } catch (e) {
      res
        .status(500)
        .json({ error: "Problème de création de l'entrée freelancer" });
    }
  } else {
    next();
  }
};

exports.updateOne = async (req, res) => {
  const freelancerId = parseInt(req.params.id, 10);

  try {
    const freelancerModify = await updateOne(freelancerId, req.body);
    res.status(200).json(freelancerModify);
  } catch (e) {
    res.status(500).json({ error: "Problème de mise à jour du freelancer" });
  }
};

// //quete express
// usersRouter.put('/:id', (req, res) => {
//   let existingUser = null;
//   let validationErrors = null;
//   Promise.all([
//     User.findOne(req.params.id),
//     User.findByEmailWithDifferentId(req.body.email, req.params.id),
//   ])
//     .then(([user, otherUserWithEmail]) => {
//       existingUser = user;
//       if (!existingUser) return Promise.reject('RECORD_NOT_FOUND');
//       if (otherUserWithEmail) return Promise.reject('DUPLICATE_EMAIL');
//       validationErrors = User.validate(req.body, false);
//       if (validationErrors) return Promise.reject('INVALID_DATA');
//       return User.update(req.params.id, req.body);
//     })
//     .then(() => {
//       res.status(200).json({ ...existingUser, ...req.body });
//     })
//     .catch((err) => {
//       console.error(err);
//       if (err === 'RECORD_NOT_FOUND')
//         res.status(404).send(`User with id ${userId} not found.`);
//       if (err === 'DUPLICATE_EMAIL')
//         res.status(409).json({ message: 'This email is already used' });
//       else if (err === 'INVALID_DATA')
//         res.status(422).json({ validationErrors });
//       else res.status(500).send('Error updating a user');
//     });
// });
