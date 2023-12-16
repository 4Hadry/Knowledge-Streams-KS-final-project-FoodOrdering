var express = require("express");
const { createUser, login } = require("../controller/userController.js");

var router = express.Router();

router.post("/signup", createUser);
router.post("/signin", login);

module.exports = router;
