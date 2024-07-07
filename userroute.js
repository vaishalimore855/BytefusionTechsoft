const express = require('express');
const User = require('../models/userModel');
const auth = require('../middleware/auth');
const router = express.Router();

// Delete user account
router.delete('/delete', auth, async (req, res) => {
  try {
    const user = req.user;
    await user.remove();
    res.status(200).json({ message: 'User deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
