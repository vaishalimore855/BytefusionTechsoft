// models/user.js
const mongoose = require('mongoose');
const orderSchema = require('./order').schema;

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, min: 0 },
    address: {
        street: { type: String },
        city: { type: String },
        zipcode: { type: String },
    },
    orders: [orderSchema],
});

module.exports = mongoose.model('User', userSchema);
