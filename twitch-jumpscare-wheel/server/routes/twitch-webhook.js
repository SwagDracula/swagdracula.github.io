const express = require('express');
const router = express.Router();
const { handleSubscriptionEvent } = require('../controllers/wheelController');

// Route to handle Twitch webhook events
router.post('/twitch', handleSubscriptionEvent);

module.exports = router;