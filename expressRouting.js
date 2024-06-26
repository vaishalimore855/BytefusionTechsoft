const express = require('express');
// Create an Express application
const app = express();
// Define a simple route for the home page
app.get('/', (req, res) => {
    res.send('Welcome to my Express app!');
});
// Define a route for the about page
app.get('/about', (req, res) => {
    res.send('This is the about page.');
});
// Define a route for the contact page
app.get('/contact', (req, res) => {
    res.send('This is the contact page.');
});
// Define a port to listen on
const port = 3000;
// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
