const express = require('express');
const router = express.Router({mergeParams: true});
const wrapAsync = require('../utils/wrapAsync.js');
const { validateReview, isLoggedIn } = require('../middleware.js');
const reviewController = require('../controllers/review.js');

//Post Route
router.post('/', isLoggedIn, validateReview, wrapAsync(reviewController.createReview));

// Delete Review
router.delete('/:reviewId', isLoggedIn, wrapAsync(reviewController.destroyReview));

module.exports = router;