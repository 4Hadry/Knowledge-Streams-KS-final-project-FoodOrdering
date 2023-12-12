var express = require("express");
const {
  getAllData,
  getPopularData,
} = require("../controller/foodController.js");
var router = express.Router();

/* GET users listing. */
router.get("/get", getAllData);
router.get("/popular", getPopularData);

module.exports = router;
