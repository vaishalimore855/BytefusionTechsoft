const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route for the home page
app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Home Page!</h1><p><a href="/css/style.css">CSS</a></p><p><a href="/js/script.js">JavaScript</a></p><p><a href="/images/logo.png">Image</a></p>');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
