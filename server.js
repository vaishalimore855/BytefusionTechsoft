/************ document Middleware ************************ */
// // app.js
// const express = require('express');
// const mongoose = require('mongoose');
// const Tour = require('./models/tourModel');

// const app = express();
// app.use(express.json());

// const DB = 'mongodb://localhost:27017/tourDB';
// mongoose.connect(DB, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => console.log('DB connection successful!'));

// app.get('/api/v1/tours', async (req, res) => {
//   try {
//     const tours = await Tour.find();
//     res.status(200).json({
//       status: 'success',
//       results: tours.length,
//       data: {
//         tours
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err.message
//     });
//   }
// });

// app.listen(3000, () => {
//   console.log('App running on port 3000...');
// });

// // Insert a tour to test
// const insertTour = async () => {
//   await Tour.create({
//     name: 'Test Tour',
//     duration: 14,
//     difficulty: 'easy',
//     price: 500,
//     ratingsAverage: 4.7
//   });
// };

// // Uncomment the line below to insert a sample tour into the database
// insertTour();

/****************Query Middleware ********************************* */
// app.js
const express = require('express');
const mongoose = require('mongoose');
const Tour = require('./models/tourModel');

const app = express();
app.use(express.json());

const DB = 'mongodb://localhost:27017/tourDB';
mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('DB connection successful!'));

app.get('/api/v1/tours', async (req, res) => {
  try {
    const tours = await Tour.find();
    res.status(200).json({
      status: 'success',
      results: tours.length,
      data: {
        tours
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message
    });
  }
});

app.listen(3000, () => {
  console.log('App running on port 3000...');
});

// Insert a tour to test
const insertTour = async () => {
  await Tour.create({
    name: 'Test Tour 1',
    duration: 14,
    difficulty: 'easy',
    price: 500,
    ratingsAverage: 4.7
  });

  await Tour.create({
    name: 'Test Tour 2',
    duration: 7,
    difficulty: 'difficult',
    price: 700,
    ratingsAverage: 4.9
  });
};

// Uncomment the line below to insert sample tours into the database
insertTour();
