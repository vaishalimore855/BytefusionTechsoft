const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Use body-parser middleware to parse JSON request bodies
app.use(bodyParser.json());

// Mock data
const users = [
    { id: 1, name: 'Vaishali More', email: 'vaishali@example.com' },
    { id: 2, name: 'Arun More', email: 'arun@example.com' },
  ];

// GET request handler for all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// PATCH request handler to update a user's details
app.patch('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = users.find(u => u.id === userId);
  if (user) {
    const updatedUser = { ...user, ...req.body };
    users = users.map(u => (u.id === userId ? updatedUser : u));
    res.json(updatedUser);
  } else {
    res.status(404).send('User not found');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
