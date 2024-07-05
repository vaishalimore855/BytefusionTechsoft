const express = require('express');
const User = require('../models/userModel');
const auth = require('../middleware/auth');
const router = express.Router();

// Create a new user
router.post('/', async (req, res) => {
  try {
    const { name, email, age, password } = req.body;

    if (!password) {
      return res.status(400).json({ error: 'Password is required' });
    }

    // Create a new user with the password
    const newUser = new User({ name, email, age, password });

    // Save the new user to the database
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// User login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    const token = user.generateAuthToken();
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Example of a protected route
router.get('/me', auth, async (req, res) => {
  res.send(req.user);
});

module.exports = router;
