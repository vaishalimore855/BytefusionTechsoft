const express = require('express');
const User = require('../models/userModel');
const auth = require('../middleware/auth');
const authorize = require('../middleware/authorize');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const router = express.Router();

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'arun@gmail.com', // Replace with your email
    pass: '$2b$10$CK1xz81EfpJhq38gVosP0ug8axzaACuB42VEs65eHwi6e3Chw4gr1', // Replace with your email password
  },
});

// Request password reset
router.post('/forgot-password', async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: 'No account with that email address exists.' });
    }

    user.generatePasswordReset();
    await user.save();

    const resetURL = `http://${req.headers.host}/users/reset-password/${user.resetPasswordToken}`;
    const mailOptions = {
      to: user.email,
      from: 'arun@gmail.com', // Replace with your email
      subject: 'Password Reset',
      text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
      Please click on the following link, or paste this into your browser to complete the process:\n\n
      ${resetURL}\n\n
      If you did not request this, please ignore this email and your password will remain unchanged.\n`,
    };

    transporter.sendMail(mailOptions, (err) => {
      if (err) {
        return res.status(500).json({ error: 'Error sending email. Please try again later.' });
      }
      res.status(200).json({ message: 'Password reset link sent to email.' });
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Reset password
router.post('/reset-password/:token', async (req, res) => {
  try {
    const user = await User.findOne({
      resetPasswordToken: req.params.token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ error: 'Password reset token is invalid or has expired.' });
    }

    if (!req.body.password) {
      return res.status(400).json({ error: 'Password is required' });
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.status(200).json({ message: 'Password has been reset.' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
