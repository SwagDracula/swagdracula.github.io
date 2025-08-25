const express = require('express');
const router = express.Router();
const tokenController = require('../controllers/tokenController');

// Route to get user tokens
router.get('/:userId', tokenController.getUserTokens);

// Route to earn tokens
router.post('/earn', tokenController.earnTokens);

// Route to spend tokens
router.post('/spend', tokenController.spendTokens);

module.exports = router;