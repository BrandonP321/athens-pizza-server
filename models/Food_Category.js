const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schema = new Schema({
  title: {
    type: String,
    trim: true,
    required: "Password is Required",
  },
  text: {
    type: String,
    trim: true,
  },
  order: {
    type: Number,
    trim: true,
    default: -1
  }
});

const FoodCategory = mongoose.model("FoodCategory", schema);

module.exports = FoodCategory;