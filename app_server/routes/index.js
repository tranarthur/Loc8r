const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController');
const otherController = require('../controllers/otherController')

/* Location pages */
router.get('/', locationController.getLocationsList);
router.get('/location', locationController.getLocationDetail);
router.get('/location/review/new', locationController.addReview);

/* Other pages */
router.get('/about',otherController.getAbout);

module.exports = router
