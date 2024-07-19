const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name']
  },
  description: {
    type: String,
    required: [true, 'A tour must have a description']
  },
  images: [String] // Array of image filenames
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
