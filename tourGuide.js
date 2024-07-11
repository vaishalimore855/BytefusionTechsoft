const express = require('express');
const TourGuide = require('../models/tourGuide');

const router = express.Router();

// Create a new tour guide
router.post('/', async (req, res) => {
    try {
        const newTourGuide = new TourGuide(req.body);
        const savedTourGuide = await newTourGuide.save();
        res.status(201).json(savedTourGuide);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Add a tour to a tour guide
router.post('/:id/tours', async (req, res) => {
    try {
        const tourGuide = await TourGuide.findById(req.params.id);
        if (!tourGuide) return res.status(404).json({ message: 'Tour guide not found' });

        tourGuide.tours.push(req.body);
        await tourGuide.save();

        res.status(201).json(tourGuide);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Find tour guides with tours near a given location
router.get('/near', async (req, res) => {
    const { lat, lng, maxDistance } = req.query;
    try {
        const tourGuides = await TourGuide.find({
            'tours.location': {
                $near: {
                    $geometry: { type: "Point", coordinates: [parseFloat(lng), parseFloat(lat)] },
                    $maxDistance: parseFloat(maxDistance)
                }
            }
        });
        res.status(200).json(tourGuides);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
