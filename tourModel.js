const mongoose = require('mongoose');

// Define the tour schema
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,       // Ensure the name field is always provided
    trim: true,           // Remove any leading or trailing whitespace
    minlength: [3, 'Tour name must be at least 3 characters long'], // Minimum length for the name
    maxlength: [100, 'Tour name cannot be more than 100 characters long'] // Maximum length for the name
  },
  location: {
    type: String,
    required: true,       // Ensure the location field is always provided
    trim: true,           // Remove any leading or trailing whitespace
  },
  price: {
    type: Number,
    required: true,       // Ensure the price field is always provided
    min: [0, 'Price must be a positive number'] // Ensure the price is non-negative
  },
  description: {
    type: String,
    trim: true,           // Remove any leading or trailing whitespace
    maxlength: [500, 'Description cannot be more than 500 characters long'] // Maximum length for the description
  }
}, {
  timestamps: true // Automatically add createdAt and updatedAt fields
});

// Create the Tour model
const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
