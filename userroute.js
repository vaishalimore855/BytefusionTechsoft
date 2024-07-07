const express = require('express');
const User = require('../models/userModel');
const auth = require('../middleware/auth');
const authorize = require('../middleware/authorize');
const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const { name, email, age, password, role } = req.body;

    if (!password) {
      return res.status(400).json({ error: 'Password is required' });
    }

    const newUser = new User({ name, email, age, password, role });
    await newUser.save();
    const token = newUser.generateAuthToken();
    res.status(201).json({ user: newUser, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

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
// Protected route for users with 'admin' role
router.get('/admin', auth, authorize('admin'), (req, res) => {
  res.send('This is an admin-only route');
});
// Protected route for any authenticated user
router.get('/me', auth, (req, res) => {
  res.send(req.user);
});

module.exports = router;
