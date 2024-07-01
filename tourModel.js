// const mongoose = require('mongoose');

// // Define the tour schema
// const tourSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,       // Ensure the name field is always provided
//     trim: true,           // Remove any leading or trailing whitespace
//     minlength: [3, 'Tour name must be at least 3 characters long'], // Minimum length for the name
//     maxlength: [100, 'Tour name cannot be more than 100 characters long'] // Maximum length for the name
//   },
//   location: {
//     type: String,
//     required: true,       // Ensure the location field is always provided
//     trim: true,           // Remove any leading or trailing whitespace
//   },
//   price: {
//     type: Number,
//     required: true,       // Ensure the price field is always provided
//     min: [0, 'Price must be a positive number'] // Ensure the price is non-negative
//   },
//   description: {
//     type: String,
//     trim: true,           // Remove any leading or trailing whitespace
//     maxlength: [500, 'Description cannot be more than 500 characters long'] // Maximum length for the description
//   }
// }, {
//   timestamps: true // Automatically add createdAt and updatedAt fields
// });

// // Create the Tour model
// const Tour = mongoose.model('Tour', tourSchema);

// module.exports = Tour;

/************************************** Modelling the Tours **************************************** */
// models/tourModel.js

// const mongoose = require('mongoose');

// // Define the tour schema
// const tourSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, 'A tour must have a name'],
//     unique: true,
//     trim: true,
//     maxlength: [40, 'A tour name must have less or equal then 40 characters'],
//     minlength: [10, 'A tour name must have more or equal then 10 characters']
//   },
//   duration: {
//     type: Number,
//     required: [true, 'A tour must have a duration']
//   },
//   maxGroupSize: {
//     type: Number,
//     required: [true, 'A tour must have a group size']
//   },
//   difficulty: {
//     type: String,
//     required: [true, 'A tour must have a difficulty'],
//     enum: {
//       values: ['easy', 'medium', 'difficult'],
//       message: 'Difficulty is either: easy, medium, difficult'
//     }
//   },
//   ratingsAverage: {
//     type: Number,
//     default: 4.5,
//     min: [1, 'Rating must be above 1.0'],
//     max: [5, 'Rating must be below 5.0'],
//     set: val => Math.round(val * 10) / 10 // Round to one decimal place
//   },
//   ratingsQuantity: {
//     type: Number,
//     default: 0
//   },
//   price: {
//     type: Number,
//     required: [true, 'A tour must have a price']
//   },
//   priceDiscount: {
//     type: Number,
//     validate: {
//       validator: function(val) {
//         // this only points to current doc on NEW document creation
//         return val < this.price;
//       },
//       message: 'Discount price ({VALUE}) should be below regular price'
//     }
//   },
//   summary: {
//     type: String,
//     trim: true,
//     required: [true, 'A tour must have a summary']
//   },
//   description: {
//     type: String,
//     trim: true
//   },
//   imageCover: {
//     type: String,
//     required: [true, 'A tour must have a cover image']
//   },
//   images: [String],
//   createdAt: {
//     type: Date,
//     default: Date.now,
//     select: false
//   },
//   startDates: [Date]
// });

// // Create the tour model
// const Tour = mongoose.model('Tour', tourSchema);

// module.exports = Tour;
/********************************************************************************** */
// models/tourModel.js

// const mongoose = require('mongoose');

// const tourSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, 'A tour must have a name'],
//     unique: true,
//     trim: true,
//     maxlength: [40, 'A tour name must have less or equal than 40 characters'],
//     minlength: [10, 'A tour name must have more or equal than 10 characters']
//   },
//   duration: {
//     type: Number,
//     required: [true, 'A tour must have a duration']
//   },
//   maxGroupSize: {
//     type: Number,
//     required: [true, 'A tour must have a group size']
//   },
//   difficulty: {
//     type: String,
//     required: [true, 'A tour must have a difficulty'],
//     enum: {
//       values: ['easy', 'medium', 'difficult'],
//       message: 'Difficulty is either: easy, medium, difficult'
//     }
//   },
//   ratingsAverage: {
//     type: Number,
//     default: 4.5,
//     min: [1, 'Rating must be above 1.0'],
//     max: [5, 'Rating must be below 5.0'],
//     set: val => Math.round(val * 10) / 10 // Round to one decimal place
//   },
//   ratingsQuantity: {
//     type: Number,
//     default: 0
//   },
//   price: {
//     type: Number,
//     required: [true, 'A tour must have a price']
//   },
//   priceDiscount: {
//     type: Number,
//     validate: {
//       validator: function(val) {
//         // this only points to current doc on NEW document creation
//         return val < this.price;
//       },
//       message: 'Discount price ({VALUE}) should be below regular price'
//     }
//   },
//   summary: {
//     type: String,
//     trim: true,
//     required: [true, 'A tour must have a summary']
//   },
//   description: {
//     type: String,
//     trim: true
//   },
//   imageCover: {
//     type: String,
//     required: [true, 'A tour must have a cover image']
//   },
//   images: [String],
//   createdAt: {
//     type: Date,
//     default: Date.now,
//     select: false
//   },
//   startDates: [Date]
// });

// const Tour = mongoose.model('Tour', tourSchema);

// module.exports = Tour;

/************************************ Making the Better API:Filtering ************** */
// models/tourModel.js

// const mongoose = require('mongoose');

// const tourSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, 'A tour must have a name'],
//     unique: true,
//     trim: true,
//     maxlength: [40, 'A tour name must have less or equal then 40 characters'],
//     minlength: [10, 'A tour name must have more or equal then 10 characters']
//   },
//   duration: {
//     type: Number,
//     required: [true, 'A tour must have a duration']
//   },
//   maxGroupSize: {
//     type: Number,
//     required: [true, 'A tour must have a group size']
//   },
//   difficulty: {
//     type: String,
//     required: [true, 'A tour must have a difficulty'],
//     enum: {
//       values: ['easy', 'medium', 'difficult'],
//       message: 'Difficulty is either: easy, medium, difficult'
//     }
//   },
//   ratingsAverage: {
//     type: Number,
//     default: 4.5,
//     min: [1, 'Rating must be above 1.0'],
//     max: [5, 'Rating must be below 5.0'],
//     set: val => Math.round(val * 10) / 10 // Round to one decimal place
//   },
//   ratingsQuantity: {
//     type: Number,
//     default: 0
//   },
//   price: {
//     type: Number,
//     required: [true, 'A tour must have a price']
//   },
//   summary: {
//     type: String,
//     trim: true,
//     required: [true, 'A tour must have a summary']
//   },
//   description: {
//     type: String,
//     trim: true
//   },
//   imageCover: {
//     type: String,
//     required: [true, 'A tour must have a cover image']
//   },
//   images: [String],
//   createdAt: {
//     type: Date,
//     default: Date.now,
//     select: false
//   },
//   startDates: [Date]
// });

// const Tour = mongoose.model('Tour', tourSchema);

// module.exports = Tour;


/********* Making better API: pagination,Aliasing,Sorting,Advanced filtering ******** */
// models/tourModel.js

// models/tourModel.js

const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true,
    trim: true,
    maxlength: [40, 'A tour name must have less or equal then 40 characters'],
    minlength: [10, 'A tour name must have more or equal then 10 characters']
  },
  duration: {
    type: Number,
    required: [true, 'A tour must have a duration']
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'A tour must have a group size']
  },
  difficulty: {
    type: String,
    required: [true, 'A tour must have a difficulty'],
    enum: {
      values: ['easy', 'medium', 'difficult'],
      message: 'Difficulty is either: easy, medium, difficult'
    }
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
    min: [1, 'Rating must be above 1.0'],
    max: [5, 'Rating must be below 5.0'],
    set: val => Math.round(val * 10) / 10 // Round to one decimal place
  },
  ratingsQuantity: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price']
  },
  summary: {
    type: String,
    trim: true,
    required: [true, 'A tour must have a summary']
  },
  description: {
    type: String,
    trim: true
  },
  imageCover: {
    type: String,
    required: [true, 'A tour must have a cover image']
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now,
    select: false
  },
  startDates: [Date]
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
