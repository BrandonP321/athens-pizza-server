const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Name is required",
  },
  price: {
    type: String,
    trim: true,
    required: "Price is required"
  },
  description: {
    type: String,
    trim: true,
  },
  additional_info: {
    type: String,
    trim: true,
  },
});

const Food = mongoose.model("Food", schema);

module.exports = Food;