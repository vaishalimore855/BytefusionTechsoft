const express = require('express');
const router = express.Router();

router.get('/contact', (req, res) => {
  res.send('Contact us at contact@example.com.');
});

module.exports = router;
