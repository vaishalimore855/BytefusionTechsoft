const express = require('express');
const multer = require('multer');
const path = require('path');

const router = express.Router();

// Define storage for the images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/img/users');
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `user-${Date.now()}${ext}`);
  }
});

// Check file type
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new Error('Not an image! Please upload only images.'), false);
  }
};

// Multer configuration
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 1024 * 1024 * 5 } // 5 MB limit
});

// Route to handle image upload
router.post('/', upload.single('photo'), (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'File uploaded successfully!',
    file: req.file
  });
});

module.exports = router;
