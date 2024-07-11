const express = require('express');
const Tour = require('../models/tour');
const TourGuide = require('../models/tourGuide');

const router = express.Router();

// Create a new tour
router.post('/', async (req, res) => {
    try {
        const { tourGuideId, ...tourData } = req.body;
        const tourGuide = await TourGuide.findById(tourGuideId);
        if (!tourGuide) return res.status(404).json({ message: 'Tour guide not found' });

        const newTour = new Tour({ ...tourData, tourGuide: tourGuideId });
        const savedTour = await newTour.save();

        tourGuide.tours.push(savedTour._id);
        await tourGuide.save();

        res.status(201).json(savedTour);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Find tours near a given location
router.get('/near', async (req, res) => {
    const { lat, lng, maxDistance } = req.query;
    try {
        const tours = await Tour.find({
            location: {
                $near: {
                    $geometry: { type: "Point", coordinates: [parseFloat(lng), parseFloat(lat)] },
                    $maxDistance: parseFloat(maxDistance)
                }
            }
        }).populate('tourGuide');
        res.status(200).json(tours);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
