const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 3000;

// Define rate limiting middleware
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Apply rate limiting middleware to all requests
app.use(limiter);

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.get('/api', (req, res) => {
    res.json({ message: 'This is the API endpoint' });
});
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 50, // Limit each IP to 50 requests per `window` (here, per 15 minutes)
});

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limit each IP to 10 requests per `window` (here, per 15 minutes)
});

// Apply the rate limiting middleware to specific routes
app.use('/api/', apiLimiter);
app.use('/auth/', authLimiter);

app.get('/api/data', (req, res) => {
  res.json({ message: 'This is the API data endpoint' });
});

app.post('/auth/login', (req, res) => {
  res.json({ message: 'This is the login endpoint' });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
