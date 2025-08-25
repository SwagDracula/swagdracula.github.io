const { body, validationResult } = require('express-validator');

const validateSpinRequest = [
    body('userId').isString().withMessage('User ID must be a string'),
    body('tokens').isInt({ gt: 0 }).withMessage('Tokens must be a positive integer'),
    body('spinType').isIn(['normal', 'bonus']).withMessage('Invalid spin type'),
];

const validateTokenRequest = [
    body('userId').isString().withMessage('User ID must be a string'),
    body('amount').isInt({ gt: 0 }).withMessage('Amount must be a positive integer'),
];

const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = {
    validateSpinRequest,
    validateTokenRequest,
    handleValidationErrors,
};