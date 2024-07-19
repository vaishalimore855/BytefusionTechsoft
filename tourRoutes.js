const express = require('express');
const tourController = require('../controllers/tourcontroller');

const router = express.Router();

router.post(
  '/upload',
  tourController.uploadTourImages,
  tourController.resizeTourImages,
  tourController.createTour
);

module.exports = router;
