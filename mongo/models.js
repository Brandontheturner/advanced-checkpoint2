const mongoose = require('mongoose')
const { Heros } = require('./schemas')

const HerosModel = mongoose.model('Hero', Hero)

module.exports = {
  HerosModel
}