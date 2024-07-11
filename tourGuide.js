const mongoose = require('mongoose');

const tourGuideSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    tours: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tour' }]
});

module.exports = mongoose.model('TourGuide', tourGuideSchema);
