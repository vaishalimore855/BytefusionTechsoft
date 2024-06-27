const express = require('express');
const app = express();
const port = 3000;

// Import user routes
const userRoutes = require('./routes/users');

// Use user routes
app.use(userRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
