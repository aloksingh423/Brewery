const express = require('express');
const Review = require('../models/Review');

const router = express.Router();

// Get reviews for a brewery
router.get('/:id/reviews', async (req, res) => {
    try {
        const reviews = await Review.find({ breweryId: req.params.id });
        res.json(reviews);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Add a review
router.post('/:id/reviews', async (req, res) => {
    const { userId, rating, description } = req.body;
    const newReview = new Review({ breweryId: req.params.id, userId, rating, description });
    console.log(newReview);
    try {
        const review = await newReview.save();
        console.log(review);
        res.json(review);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;