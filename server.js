const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
    insertSampleUser();
}).catch(err => console.error('Could not connect to MongoDB', err));

// User Model
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    }
});

const User = mongoose.model('User', userSchema);

// Function to insert a sample user
async function insertSampleUser() {
    try {
        const user = new User({
            name: 'John Doe',
            email: 'john@example.'
        });
        await user.save();
        console.log('Sample user inserted');
    } catch (error) {
        if (error.name === 'ValidationError') {
            console.error('Validation Error:', error.message);
        } else {
            console.error('Error inserting sample user:', error);
        }
    }
}

// Routes
app.post('/users', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        if (error.name === 'ValidationError') {
            const errors = Object.values(error.errors).map(err => err.message);
            res.status(400).send({ errors });
        } else {
            res.status(400).send(error);
        }
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
