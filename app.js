const express = require('express');
const path = require('path');
const tourRouter = require('./routes/tourRoutes');

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Set up view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/api/v1/tours', tourRouter);

// Render the form
app.get('/form', (req, res) => {
  res.render('form');
});

module.exports = app;
