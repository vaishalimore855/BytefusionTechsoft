const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
// Mock data
const users = [
    { id: 1, name: 'VaishaliMore', email: 'vaishali@example.com' },
    { id: 2, name: 'ArunMore', email: 'arun@example.com' },
  ];
// GET request handler for all users
app.get('/api/users', (req, res) => {
  res.json(users);
});
// GET request handler for a single user by ID
app.get('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = users.find(u => u.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});
// GET request handler for a single user by ID and name
app.get('/api/users/:id/:name', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const userName = req.params.name;
  const user = users.find(u => u.id === userId && u.name === userName);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
