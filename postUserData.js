const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Use body-parser middleware to parse JSON request bodies
app.use(bodyParser.json());

// Mock data
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
];

// GET request handler for all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// POST request handler to create a new user
app.post('/api/users', (req, res) => {
  const newUser = {
    id: users.length + 1, // Generate a new ID
    name: req.body.name,
    email: req.body.email
  };
  users.push(newUser);
  res.status(201).json(newUser); // Return the newly created user with a 201 status code
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
