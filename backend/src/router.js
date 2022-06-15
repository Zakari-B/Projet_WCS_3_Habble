const express = require("express");

const UserController = require("./controllers/UsersController");

const router = express.Router();

router.post("/users", UserController.createOne);

module.exports = router;
