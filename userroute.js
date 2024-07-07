const express = require('express');
const User = require('../models/userModel');
const auth = require('../middleware/auth');
const bcrypt = require('bcrypt');
const router = express.Router();

// Update user data
router.patch('/update', auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'email', 'age'];
  const isValidOperation = updates.every(update => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).json({ error: 'Invalid updates!' });
  }
try {
    const user = req.user;
    updates.forEach(update => user[update] = req.body[update]);
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
module.exports = router;
