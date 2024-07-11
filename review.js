const express = require('express');
const Review = require('../models/review');
const Tour = require('../models/tour');
const TourGuide = require('../models/tourGuide');

const router = express.Router();

// Create a new review
router.post('/', async (req, res) => {
    try {
        const { tourId, tourGuideId, ...reviewData } = req.body;
        const tour = await Tour.findById(tourId);
        const tourGuide = await TourGuide.findById(tourGuideId);
        if (!tour || !tourGuide) return res.status(404).json({ message: 'Tour or Tour guide not found' });

        const newReview = new Review({ ...reviewData, tour: tourId, tourGuide: tourGuideId });
        const savedReview = await newReview.save();

        res.status(201).json(savedReview);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all reviews for a tour
router.get('/tour/:tourId', async (req, res) => {
    try {
        const reviews = await Review.find({ tour: req.params.tourId }).populate('tour').populate('tourGuide');
        res.status(200).json(reviews);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get all reviews for a tour guide
router.get('/tourGuide/:tourGuideId', async (req, res) => {
    try {
        const reviews = await Review.find({ tourGuide: req.params.tourGuideId }).populate('tour').populate('tourGuide');
        res.status(200).json(reviews);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
