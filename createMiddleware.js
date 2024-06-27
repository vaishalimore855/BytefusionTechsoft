// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Custom middleware to log request details
const requestLogger = (req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
};

// Custom middleware to add request time
const requestTime = (req, res, next) => {
  req.requestTime = new Date();
  next();
};

// Custom error handling middleware
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
};

// Use the custom middleware
app.use(requestLogger);
app.use(requestTime);

// Route to handle GET requests
app.get('/', (req, res) => {
  res.send(`Hello, World! Request received at: ${req.requestTime}`);
});

// Route to demonstrate error handling
app.get('/error', (req, res) => {
  throw new Error('This is a deliberate error.');
});

// Use the custom error handling middleware
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
