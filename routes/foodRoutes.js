var express = require("express");
const {
  getAllData,
  getPopularData,
  getFoodById
} = require("../controller/foodController.js");
var router = express.Router();

/* GET users listing. */
router.get("/get", getAllData);
router.get("/popular", getPopularData);
router.get("/getfood/:id", getFoodById);


module.exports = router;
