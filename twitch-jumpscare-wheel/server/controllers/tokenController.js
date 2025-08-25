// This file contains functions for managing token-related requests.

const Token = require('../models/Token');
const User = require('../models/User');

// Get the user's token balance
exports.getTokenBalance = async (req, res) => {
    try {
        const userId = req.user.id; // Assuming user ID is stored in req.user
        const tokenData = await Token.findOne({ userId });

        if (!tokenData) {
            return res.status(404).json({ message: 'Token data not found' });
        }

        res.status(200).json({ balance: tokenData.balance });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Earn tokens for a user
exports.earnTokens = async (req, res) => {
    try {
        const userId = req.user.id; // Assuming user ID is stored in req.user
        const tokensToAdd = req.body.tokens; // Number of tokens to add

        const tokenData = await Token.findOneAndUpdate(
            { userId },
            { $inc: { balance: tokensToAdd } },
            { new: true, upsert: true }
        );

        res.status(200).json({ balance: tokenData.balance });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Spend tokens for a user
exports.spendTokens = async (req, res) => {
    try {
        const userId = req.user.id; // Assuming user ID is stored in req.user
        const tokensToSpend = req.body.tokens; // Number of tokens to spend

        const tokenData = await Token.findOne({ userId });

        if (!tokenData || tokenData.balance < tokensToSpend) {
            return res.status(400).json({ message: 'Insufficient tokens' });
        }

        tokenData.balance -= tokensToSpend;
        await tokenData.save();

        res.status(200).json({ balance: tokenData.balance });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};