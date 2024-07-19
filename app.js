const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const uploadRouter = require('./routes/upload');

dotenv.config();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/v1/upload', uploadRouter);

module.exports = app;
