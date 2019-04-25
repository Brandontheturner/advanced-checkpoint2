var mongoose = require("mongoose");
var ObjectId = mongoose.Types.ObjectId;
const { HerosModel } = require("../../mongo/models");

const getAll = () => {
  return HerosModel.find({});
};

const createHero = hero => {
  console.log("inside of create hero", hero);

  return HerosModel.create({
    heroName: hero.heroName,
    power: hero.power,
    universe: hero.universe,
    powerRating: hero.powerRating
  })
    .then(res => console.log("hero result", res))
    .catch(err => console.log("hero error", err));
};

const deleteHero = id => {
  return HerosModel.deleteOne({ _id: id });
};

const getById = id => {
  return HerosModel.findOne({ _id: ObjectId(id) });
};

module.exports = {
  getAll,
  createHero,
  deleteHero,
  getById
};
