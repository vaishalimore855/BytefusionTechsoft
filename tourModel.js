// models/tourModel.js
const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: String,
  duration: Number,
  difficulty: String,
  price: Number,
  ratingsAverage: Number,
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
