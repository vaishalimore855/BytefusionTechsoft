
/************************ Building the simple API******************** */
// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/api', (req, res) => {
//   res.json({ message: 'Hello, this is your API!' });
// });

// app.use((req, res) => {
//   res.status(404).json({ message: 'Not Found' });
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}/`);
// });
/******************************************************************* */





/*************************************using third party module- lodash */
// app.js
const _ = require('lodash');

// Example usage of lodash functions
const numbers = [10, 5, 100, 2, 1000];
const sortedNumbers = _.sortBy(numbers);
console.log('Sorted Numbers:', sortedNumbers);

const users = [
  { user: 'fred', age: 48 },
  { user: 'barney', age: 34 },
  { user: 'fred', age: 40 },
  { user: 'barney', age: 36 }
];
const groupedUsers = _.groupBy(users, 'user');
console.log('Grouped Users:', groupedUsers);
/************************************************************************* */

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
