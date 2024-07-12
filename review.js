const express = require('express');
const Review = require('../models/review');
const Tour = require('../models/tour');

const router = express.Router({ mergeParams: true }); // Merge parent params

// Route to create a new review for a tour
router.post('/', async (req, res) => {
    try {
        const { tourId } = req.params;
        const tour = await Tour.findById(tourId);
        if (!tour) return res.status(404).json({ message: 'Tour not found' });

        const newReview = new Review({ ...req.body, tour: tourId });
        const savedReview = await newReview.save();
        res.status(201).json(savedReview);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Route to get all reviews for a tour
router.get('/', async (req, res) => {
    try {
        const { tourId } = req.params;
        const reviews = await Review.find({ tour: tourId });
        res.status(200).json(reviews);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
