const express = require('express');
const app = express();
const port = 3000;
// Route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});
// Route for the about page
app.get('/about', (req, res) => {
  res.send('This is the About Page.');
});
// Route for the contact page
app.get('/contact', (req, res) => {
  res.send('Contact us at contact@example.com.');
});
// Route for handling a POST request
app.post('/submit', (req, res) => {
  res.send('Form submitted!');
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
