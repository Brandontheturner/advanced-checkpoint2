const mongoose = require("mongoose");
const { Hero } = require("./schemas");

const HerosModel = mongoose.model("Hero", Hero);

module.exports = {
  HerosModel
};
