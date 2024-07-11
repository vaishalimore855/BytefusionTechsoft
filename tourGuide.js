const mongoose = require('mongoose');

// Define the Tour schema
const tourSchema = new mongoose.Schema({
    name: { type: String, required: true },
    duration: { type: Number, required: true }, // in hours
    price: { type: Number, required: true },
    location: {
        type: { type: String, enum: ['Point'], required: true },
        coordinates: { type: [Number], required: true }
    },
    date: { type: Date, required: true }
});

// Define the TourGuide schema with embedded Tour documents
const tourGuideSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    tours: [tourSchema] // Embedding tours
});

// Create a 2dsphere index on the location field of tours
tourSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('TourGuide', tourGuideSchema);
