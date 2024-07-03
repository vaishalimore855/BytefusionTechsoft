const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const AppError = require('./utills/appError');
const globalErrorHandler = require('./middleware/errorHandler');
const tourRouter = require('./routes/tourRoutes');

const app = express();

app.use(express.json());
app.use(morgan('dev'));

const DB = 'mongodb://localhost:27017/tourDB';
mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('DB connection successful!'));

// Mounting the router
app.use('/api/v1/tours', tourRouter);

// Catch-all route for unhandled routes
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Global error handling middleware
app.use(globalErrorHandler);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
