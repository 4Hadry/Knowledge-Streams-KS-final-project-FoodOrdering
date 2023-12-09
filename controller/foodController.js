const food = require("../Models/foodModel");

const getAllData = async (req, res) => {
  const myData = await food.find({});
  res.status(200).json({ myData });
};
// export default getAllData;
module.exports = getAllData;
