// import mongoose from "mongoose";
const { mongoose } = require("mongoose");

// import mongoose from "mongoose";
mongoose;
const foodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      //   required: true,
    },
    description: {
      type: String,
      //   required: true,
    },

    img: {
      type: Array,
      //   required: true,
    },
    price: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const food = mongoose.model("food_items", foodSchema);
module.exports = food;
