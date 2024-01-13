const express = require('express');
const trainController = require('../controller/trainController');

const router = express.Router();

// Define your routes here
router.post('/reserve-seats', trainController.reserveSeats);
router.get('/display-seats', trainController.displaySeats);

module.exports = router;
