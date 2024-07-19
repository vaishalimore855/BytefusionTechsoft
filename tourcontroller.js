const multer = require('multer');
const sharp = require('sharp');
const Tour = require('../models/tourModel');

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new Error('Not an image! Please upload only images.'), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 1024 * 1024 * 5 } // 5 MB limit
});

exports.uploadTourImages = upload.array('images', 10); // Limit to 10 images

exports.resizeTourImages = async (req, res, next) => {
  if (!req.files) return next();

  req.body.images = [];

  await Promise.all(
    req.files.map(async file => {
      const filename = `tour-${Date.now()}-${file.originalname}`;
      
      await sharp(file.buffer)
        .resize(800, 600)
        .toFile(`public/img/tours/${filename}`);
      
      req.body.images.push(filename);
    })
  );

  next();
};

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    });
  }
};
