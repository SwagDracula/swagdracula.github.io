const express = require('express');
const router = express.Router();
const wheelController = require('../controllers/wheelController');

// Route to spin the wheel
router.post('/spin', wheelController.spinWheel);

// Route to get the current wheel configuration
router.get('/config', wheelController.getWheelConfig);

module.exports = router;