const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schema = new Schema({
  page: {
    type: String,
    trim: true,
    required: "Page is required",
  },
  section: {
    type: String,
    trim: true,
    required: "Section is required"
  },
  text_body: {
    type: String,
    trim: true,
  }
});

const PageText = mongoose.model("PageText", schema);

module.exports = PageText;