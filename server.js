const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const AppError = require('./utills/appError');
const Tour = require('./models/tourModel');

const app = express();

app.use(express.json());
app.use(morgan('dev'));

const DB = 'mongodb://localhost:27017/tourDB';
mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('DB connection successful!'));

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/v1/tours', async (req, res, next) => {
  try {
    const tours = await Tour.find();
    res.status(200).json({
      status: 'success',
      results: tours.length,
      data: {
        tours,
      },
    });
  } catch (err) {
    next(err);
  }
});

// Example route to trigger an error
app.get('/error', (req, res, next) => {
  next(new AppError('This is a custom error message', 400));
});

// Catch-all route for unhandled routes
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Error handling middleware
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

// Insert sample tours to test
const insertTours = async () => {
  await Tour.create([
    { name: 'Test Tour 1', duration: 14, difficulty: 'easy', price: 500, ratingsAverage: 4.7 },
    { name: 'Test Tour 2', duration: 7, difficulty: 'medium', price: 700, ratingsAverage: 4.9 },
    { name: 'Test Tour 3', duration: 10, difficulty: 'difficult', price: 1000, ratingsAverage: 4.8 },
  ]);
};

// Uncomment the line below to insert sample tours into the database
// insertTours();
