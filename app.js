const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const uploadRouter = require('./routes/upload');

dotenv.config();

const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/v1/upload', uploadRouter);

module.exports = app;
