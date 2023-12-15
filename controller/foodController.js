const catagory = require("../Models/CatagoryModel");
const food = require("../Models/foodModel");
const Pfood = require("../Models/popularModel");

const getAllData = async (req, res) => {
  const myData = await food.find({});
  res.status(200).json({ myData });
};
const getCatagory = async (req, res) => {
  const myData = await catagory.find({});
  res.status(200).json({ myData });
};
const getPopularData = async (req, res) => {
  const myData = await Pfood.find({});
  res.status(200).json({ myData });
};
// module.exports = getAllData ;
module.exports = { getAllData, getPopularData, getCatagory };
