const express = require('express');
const router = express.Router();
const ctrlRestaurants = require('../controllers/restaurants');

// Restaurants
router.get('/restaurants', ctrlRestaurants.restaurantsReadAll);
router.get('/restaurants/:restaurantid', ctrlRestaurants.restaurantsReadOne);

module.exports = router;
