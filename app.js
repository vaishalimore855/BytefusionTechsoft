const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const port = 3000;
app.use(bodyParser.json()); // Middleware
mongoose.connect('mongodb://localhost:27017/node-mongodb-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
const userRoutes = require('./routes/userroute');// Import routes
app.use('/users', userRoutes);// Example of a protected route
const auth = require('./middleware/auth');
app.get('/protected', auth, (req, res) => {
  res.send('This is a protected route');
});
app.listen(port, () => {                 // Start the server
  console.log(`Server is running on http://localhost:${port}`);
});
