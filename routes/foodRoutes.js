var express = require("express");
const {
  getAllData,
  getPopularData,
  getCatagory,
} = require("../controller/foodController.js");
var router = express.Router();

/* GET users listing. */
router.get("/get", getAllData);
router.get("/catagory", getCatagory);
router.get("/popular", getPopularData);

module.exports = router;
