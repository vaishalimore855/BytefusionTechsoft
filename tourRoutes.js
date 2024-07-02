// routes/tourRoutes.js

const express = require('express');
const tourController = require('../controllers/tourController');

const router = express.Router();

router
  .route('/tour-stats')
  .get(tourController.getTourStats);

module.exports = router;
