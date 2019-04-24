const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Hero = new Schema({
  heroName: String,
  power: String,
  universe: String,
  powerRating: Number
});

module.exports = { Hero };
