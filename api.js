const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/users', (req, res) => {
    res.json([{ id: 1, name: 'John Doe' }]);
});

app.listen(3000, () => console.log('API running on port 3000'));
