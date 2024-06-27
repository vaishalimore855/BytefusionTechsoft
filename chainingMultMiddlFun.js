const express = require('express');
const app = express();
const port = 3000;

// First middleware function
const middleware1 = (req, res, next) => {
  console.log('Middleware 1: Logging request details');
  next(); // Call the next middleware function
};

// Second middleware function
const middleware2 = (req, res, next) => {
  console.log('Middleware 2: Adding a custom property to the request object');
  req.customProperty = 'This is a custom property';
  next(); // Call the next middleware function
};

// Third middleware function
const middleware3 = (req, res, next) => {
  console.log('Middleware 3: Checking a condition');
  if (req.customProperty === 'This is a custom property') {
    next(); // Call the next middleware function
  } else {
    res.status(400).send('Bad Request');
  }
};

// Route that uses the chained middleware functions
app.get('/test', middleware1, middleware2, middleware3, (req, res) => {
  res.send('Middleware chain executed successfully. Custom Property: ' + req.customProperty);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
