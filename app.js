// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const app = express();
// const port = 3000;
// app.use(bodyParser.json());// Middleware
// mongoose.connect('mongodb://localhost:27017/node-mongodb-app', {  //MongoDB connection
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });
// const axios = require('axios');

// const createUser = async () => {
//   try {
//     const response = await axios.post('http://localhost:3000/users', {
//       name: 'Amit More',
//       email: '@example.com',
//       age: 30,
//     });
//     console.log('User created:', response.data);
//   } catch (error) {
//     console.error('Error creating user:', error.response ? error.response.data : error.message);
//   }
// };

// createUser();

// // Import routes
// const userRoutes = require('./routes/userroute');
// app.use('/users', userRoutes);
// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(bodyParser.json()); // Middleware

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/node-mongodb-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Import routes
const userRoutes = require('./routes/userroute');
app.use('/users', userRoutes);

// Create a user using axios (example usage)
const createUser = async () => {
  try {
    const response = await axios.post('http://localhost:3000/users', {
      name: 'Arun More',
      email: 'arun@example.com',
      age: 30,
      password: 'securepassword123',  // Add password field
    });
    console.log('User created:', response.data);
  } catch (error) {
    console.error('Error creating user:', error.response ? error.response.data : error.message);
  }
};

// Uncomment this line to create a user on server start (for demonstration purposes)
createUser();

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

