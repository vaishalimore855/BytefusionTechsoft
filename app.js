// app.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set 'views' directory for any views
app.set('views', path.join(__dirname, 'views'));

// Set Pug as the templating engine
app.set('view engine', 'pug');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Home', message: 'Hello, Pug!' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
