// const express = require('express');
// const User = require('../models/userModel');
// const router = express.Router();

// // Create a new user
// router.post('/', async (req, res) => {
//   try {
//     const user = new User(req.body);
//     await user.save();
//     res.status(201).send(user);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// // Get all users
// router.get('/', async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).send(users);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// // Get a user by ID
// router.get('/:id', async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     if (!user) {
//       return res.status(404).send();
//     }
//     res.status(200).send(user);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// // Update a user by ID
// router.put('/:id', async (req, res) => {
//   try {
//     const user = await User.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true,
//     });
//     if (!user) {
//       return res.status(404).send();
//     }
//     res.status(200).send(user);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// // Delete a user by ID
// router.delete('/:id', async (req, res) => {
//   try {
//     const user = await User.findByIdAndDelete(req.params.id);
//     if (!user) {
//       return res.status(404).send();
//     }
//     res.status(200).send(user);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// module.exports = router;

const express = require('express');
const User = require('../models/userModel'); // Update path if necessary
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

// Example route for user login
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

    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
