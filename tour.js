const express = require('express');
const Tour = require('../models/tour');
const reviewRouter = require('./review'); // Import the review router

const router = express.Router();

// Route to create a new tour
router.post('/', async (req, res) => {
    try {
        const newTour = new Tour(req.body);
        const savedTour = await newTour.save();
        res.status(201).json(savedTour);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Route to get all tours
router.get('/', async (req, res) => {
    try {
        const tours = await Tour.find();
        res.status(200).json(tours);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Mount the review router on the /:tourId/reviews path
router.use('/:tourId/reviews', reviewRouter);

module.exports = router;
