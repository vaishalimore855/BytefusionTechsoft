// app.js
const express = require('express');
const mongoose = require('mongoose');
const Tour = require('./models/tourModel');

const app = express();
app.use(express.json());

const DB = 'mongodb://localhost:27017/tourDB';
mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('DB connection successful!'));

app.get('/tour/:id', async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    if (!tour) {
      return res.status(404).json({ status: 'fail', message: 'Tour not found' });
    }
    console.log(tour.durationWeeks); // Output the duration in weeks
    res.status(200).json({
      status: 'success',
      data: {
        tour
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message
    });
  }
});

app.listen(3000, () => {
  console.log('App running on port 3000...');
});

// Insert a tour to test
const insertTour = async () => {
  await Tour.create({
    name: 'Test Tour',
    duration: 14,
    difficulty: 'easy',
    price: 500,
    ratingsAverage: 4.7
  });
};

// Uncomment the line below to insert a sample tour into the database
// insertTour();
