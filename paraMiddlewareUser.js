const express = require('express');
const router = express.Router();

// Middleware to handle user ID parameter
router.param('userId', (req, res, next, userId) => {
  // Simulate fetching user from a database
  const users = {
    1: { name: 'John Doe' },
    2: { name: 'Jane Doe' },
  };
  req.user = users[userId] ? users[userId] : null;
  next();
});

// Route to get user info
router.get('/users/:userId', (req, res) => {
  if (req.user) {
    res.send(`User Info: ${req.user.name}`);
  } else {
    res.status(404).send('User not found');
  }
});

module.exports = router;
