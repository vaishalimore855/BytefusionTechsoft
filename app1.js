const express = require('express');
const mongoose = require('mongoose');
const Tour = require('./modles/tourModel');

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// MongoDB connection string
const uri = 'mongodb://localhost:27017/mytourapp';
// const uri= "mongodb+srv://vaishalimore855:Vaishali@123@temp-test.5ihydqf.mongodb.net/?retryWrites=true&w=majority&appName=Temp-Test"

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB', err));

// Route to create a new tour
app.post('/tours', async (req, res) => {
  try {
    const { name, location, price, description } = req.body;
    const tour = new Tour({ name, location, price, description });
    await tour.save();
    res.status(201).send(tour);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Route to get all tours
app.get('/tours', async (req, res) => {
  try {
    const tours = await Tour.find();
    res.status(200).send(tours);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Route to get a tour by ID
app.get('/tours/:id', async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    if (!tour) return res.status(404).send();
    res.status(200).send(tour);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Route to update a tour by ID
app.patch('/tours/:id', async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!tour) return res.status(404).send();
    res.status(200).send(tour);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Route to delete a tour by ID
app.delete('/tours/:id', async (req, res) => {
  try {
    const tour = await Tour.findByIdAndDelete(req.params.id);
    if (!tour) return res.status(404).send();
    res.status(200).send(tour);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
