// index.js
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Use morgan to log requests
app.use(morgan('combined'));

// Use cookie-parser to parse cookies
app.use(cookieParser());

// Use cors to enable Cross-Origin Resource Sharing
app.use(cors());

// Sample route to demonstrate cookie handling
app.get('/set-cookie', (req, res) => {
  res.cookie('myCookie', 'cookieValue');
  res.send('Cookie has been set');
});

app.get('/get-cookie', (req, res) => {
  res.send(`Cookie value: ${req.cookies.myCookie}`);
});

// Sample route to test CORS
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
