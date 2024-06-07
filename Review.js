const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    breweryId: { type: String, required: true },
    userId: { type: String, required: true },
    rating: { type: Number, required: true },
    description: { type: String, required: true }
});

module.exports = mongoose.model('Review', reviewSchema);