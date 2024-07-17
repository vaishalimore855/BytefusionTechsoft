const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

// Load tour data
const tours = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/tours.json'), 'utf-8'));

// Route to render tour overview
router.get('/', (req, res) => {
  res.render('tour-overview', { title: 'Tour Overview', tours });
});

// Route to render individual tour page
router.get('/:id', (req, res) => {
  const tourId = parseInt(req.params.id, 10);
  const tour = tours.find(t => t.id === tourId);
  if (!tour) {
    return res.status(404).send('Tour not found');
  }
  res.render('tour', { title: tour.name, tour });
});

module.exports = router;
