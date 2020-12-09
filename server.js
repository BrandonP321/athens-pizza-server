const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const cors = require("cors");
// const {cloudinary} = require('./routes/cloudinary');
require('dotenv').config()

const PORT = process.env.PORT || 4000;

const app = express();
app.use(cors());


app.use(logger("dev"));

// define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/athenspizza", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });


// bring in routes
const food = require("./routes/Food")
const pageText = require('./routes/pageText')

//use routes
app.use("/api", food)
app.use('/api', pageText)


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});