const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Mock data
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
];

// GET request handler for all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// DELETE request handler to delete a user by ID
app.delete('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const userIndex = users.findIndex(u => u.id === userId);
  if (userIndex !== -1) {
    users = users.filter(u => u.id !== userId);
    res.status(204).send(); // 204 No Content
  } else {
    res.status(404).send('User not found');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
