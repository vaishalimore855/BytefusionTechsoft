const express = require('express');
const Place = require('../models/place');

const router = express.Router();

// Create a new place
router.post('/', async (req, res) => {
    try {
        const newPlace = new Place(req.body);
        const savedPlace = await newPlace.save();
        res.status(201).json(savedPlace);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Find places near a given location
router.get('/near', async (req, res) => {
    const { lat, lng, maxDistance } = req.query;
    try {
        const places = await Place.find({
            location: {
                $near: {
                    $geometry: { type: "Point", coordinates: [parseFloat(lng), parseFloat(lat)] },
                    $maxDistance: parseFloat(maxDistance)
                }
            }
        });
        res.status(200).json(places);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
