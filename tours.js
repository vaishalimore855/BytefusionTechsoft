const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

// Load tour data
const tours = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/tours.json'), 'utf-8'));

router.get('/', (req, res) => {
  res.render('tour-overview', { title: 'Tour Overview', tours });
});

module.exports = router;
