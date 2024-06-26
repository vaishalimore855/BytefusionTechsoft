const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { title: 'Dynamic Page', message: 'Hello, world!' });
});

app.listen(3000, () => console.log('Server running on port 3000'));
