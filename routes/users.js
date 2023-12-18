// var express = require("express");
// const { createUser, Login } = require("../controller/userController.js");
// var router = express.Router();

// /* GET users listing. */
// router.post("/signup", createUser);
// router.post("/signin", Login);

// module.exports = router;

var express = require("express");
const {
  createUser,
  login,
  getUserProfile,
} = require("../controller/userController.js");
// const { authenticateToken } = require("../controller/authenticateToken.js");
var router = express.Router();

router.post("/signup", createUser);
router.post("/signin", login);
router.get("/profile", getUserProfile);

module.exports = router;
