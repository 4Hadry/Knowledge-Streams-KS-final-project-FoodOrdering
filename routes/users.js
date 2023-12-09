var express = require("express");
const { createUser, Login } = require("../controller/userController.js");
var router = express.Router();

/* GET users listing. */
router.post("/signup", createUser);
router.post("/signin", Login);

module.exports = router;
