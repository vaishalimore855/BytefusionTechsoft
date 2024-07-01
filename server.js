// // app.js or server.js

// const express = require('express');
// const mongoose = require('mongoose');
// const Tour = require('./models/tourModel');

// const app = express();
// app.use(express.json());

// const uri = 'mongodb://localhost:27017/tourDB';
// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('Connection error', err));

// const createTour = async () => {
//   try {
//     const newTour = await Tour.create({
//       name: 'The Forest Hiker',
//       duration: 5,
//       maxGroupSize: 25,
//       difficulty: 'easy',
//       price: 497,
//       summary: 'Breathtaking hike through the Canadian Banff National Park',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
//       imageCover: 'tour-1-cover.jpg',
//       images: ['tour-1-1.jpg', 'tour-1-2.jpg', 'tour-1-3.jpg'],
//       startDates: ['2022-03-05', '2022-05-10', '2022-06-15']
//     });
//     console.log('Tour created:', newTour);
//   } catch (error) {
//     console.error('Error creating tour:', error);
//   }
// };

// createTour();

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });

/*************************Making Better API:Filtering */
// server.js

// const express = require('express');
// const mongoose = require('mongoose');
// const tourRouter = require('./routes/tourRoutes');

// const app = express();

// app.use(express.json());

// const DB = 'mongodb://localhost:27017/tourDB';
// mongoose.connect(DB, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => console.log('DB connection successful!'));

// app.use('/api/v1/tours', tourRouter);

// const port = 3000;
// app.listen(port, () => {
//   console.log(`App running on port ${port}...`);
// });

//Making the better API:Advanced filtering,Sorting,Pagination,Aliasing
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
