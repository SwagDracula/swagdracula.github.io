const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Route for user login
router.post('/login', authController.login);

// Route for user registration
router.post('/register', authController.register);

// Route for token validation
router.get('/validate', authController.validateToken);

module.exports = router;