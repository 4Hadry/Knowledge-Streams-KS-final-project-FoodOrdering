const food = require("../Models/foodModel");
const Pfood = require("../Models/popularModel");

const getAllData = async (req, res) => {
  const myData = await food.find({});
  res.status(200).json({ myData });
};

const getPopularData = async (req, res) => {
  const myData = await Pfood.find({});
  res.status(200).json({ myData });
};

const getFoodById = async (req, res) => {
  const { id } = req.params;

  try {
    // Use findById to get a specific food item by ID
    const myData = await food.findById(id);

    if (!myData) {
      return res.status(404).json({ error: "Food item not found" });
    }

    res.status(200).json({ myData });
  } catch (error) {
    console.error("Error in getFoodById:", error);
    res.status(500).json({ error: error.message });
  }
};
// module.exports = getAllData ;
module.exports = { getAllData, getPopularData, getFoodById };
