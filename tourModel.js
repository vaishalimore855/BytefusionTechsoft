// // models/tourModel.js
//document middleware
// const mongoose = require('mongoose');

// const tourSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, 'A tour must have a name'],
//     trim: true
//   },
//   duration: {
//     type: Number,
//     required: [true, 'A tour must have a duration']
//   },
//   difficulty: {
//     type: String,
//     required: [true, 'A tour must have a difficulty'],
//     enum: {
//       values: ['easy', 'medium', 'difficult'],
//       message: 'Difficulty is either: easy, medium, difficult'
//     }
//   },
//   price: {
//     type: Number,
//     required: [true, 'A tour must have a price']
//   },
//   ratingsAverage: {
//     type: Number,
//     default: 4.5
//   }
// });

// // Adding a pre-save hook
// tourSchema.pre('save', function(next) {
//   console.log('Document will be saved:', this);
//   this.name = this.name.toLowerCase(); // Example modification before saving
//   next();
// });

// // Adding a post-save hook
// tourSchema.post('save', function(doc, next) {
//   console.log('Document has been saved:', doc);
//   next();
// });

// const Tour = mongoose.model('Tour', tourSchema);

// module.exports = Tour;


/************* Query Middleware ************************************** */
// models/tourModel.js
const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    trim: true
  },
  duration: {
    type: Number,
    required: [true, 'A tour must have a duration']
  },
  difficulty: {
    type: String,
    required: [true, 'A tour must have a difficulty'],
    enum: {
      values: ['easy', 'medium', 'difficult'],
      message: 'Difficulty is either: easy, medium, difficult'
    }
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price']
  },
  ratingsAverage: {
    type: Number,
    default: 4.5
  }
});

// Adding a pre-find hook
tourSchema.pre('find', function(next) {
  this.find({ difficulty: { $ne: 'difficult' } }); // Exclude difficult tours by default
  console.log('Pre-find hook called');
  next();
});

// Adding a post-find hook
tourSchema.post('find', function(docs, next) {
  console.log('Post-find hook called');
  console.log('Found documents:', docs);
  next();
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
