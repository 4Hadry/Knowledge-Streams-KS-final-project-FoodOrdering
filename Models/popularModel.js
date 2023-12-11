// import mongoose from "mongoose";
const { mongoose } = require("mongoose");

// import mongoose from "mongoose";

const PopularSchema = new mongoose.Schema(
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

const Pfood = mongoose.model("popular_item", PopularSchema);
module.exports = Pfood;
