// app.js

const express = require('express');
const mongoose = require('mongoose');
const tourRouter = require('./routes/tourRoutes');

const app = express();

app.use(express.json());

const DB = 'mongodb://localhost:27017/tourDB';
mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('DB connection successful!'));

app.use('/api/v1/tours', tourRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
