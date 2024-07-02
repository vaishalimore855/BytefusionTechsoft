/*********************** Virtual Properties****************** */
// models/tourModel.js
const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    trim: true
  },
  duration: {
    type: Number,
    required: [true, 'A tour must have a duration']
  },
  difficulty: {
    type: String,
    required: [true, 'A tour must have a difficulty'],
    enum: {
      values: ['easy', 'medium', 'difficult'],
      message: 'Difficulty is either: easy, medium, difficult'
    }
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price']
  },
  ratingsAverage: {
    type: Number,
    default: 4.5
  }
});

// Adding a virtual property 'durationWeeks'
tourSchema.virtual('durationWeeks').get(function() {
  return this.duration / 7;
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
