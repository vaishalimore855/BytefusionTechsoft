// const express = require('express');
// const bodyParser = require('body-parser');
// const userRoutes = require('./routes/user');

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(bodyParser.json());

// app.use('/api/users', userRoutes);

// app.get('/', (req, res) => {
//   res.send('Hello, World!.....');
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });




const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
// Mock data
const users = [
  { id: 1, name: 'Vaishali More', email: 'vaishali@example.com' },
  { id: 2, name: 'Arun More', email: 'arun@example.com' },
];
// GET request handler for root URL
app.get('/', (req, res) => {
  res.send('Welcome to the User API');
});
// GET request handler for all users
app.get('/api/users', (req, res) => {
  res.json(users);
});
// GET request handler for a single user by ID
app.get('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
