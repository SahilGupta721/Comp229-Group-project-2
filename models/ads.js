const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdSchema = new Schema({
    title: String,
    description: String,
    price: String,
    createdAt: Date,
    expiresAt: Date,
    isActive: Boolean
})

module.exports = mongoose.model('Ad', AdSchema);