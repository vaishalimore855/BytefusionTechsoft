const express = require('express');
const helmet = require('helmet');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(helmet({                // Use Helmet to set various HTTP headers for security
  contentSecurityPolicy: {
      directives: {
          defaultSrc: ["'self'"],
          scriptSrc: ["'self'", "'unsafe-inline'"],
          styleSrc: ["'self'", 'https://example.com'],
          imgSrc: ["'self'", 'data:']
      } },
  hsts: {
      maxAge: 31536000, // 1 year
      includeSubDomains: true,
      preload: true
  },
  referrerPolicy: { policy: 'no-referrer' }
}));
app.get('/', (req, res) => {
    res.send('Hello, world!');
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})