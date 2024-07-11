const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});

app.use(express.json());

const placeRoutes = require('./routes/place');
app.use('/api/places', placeRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
