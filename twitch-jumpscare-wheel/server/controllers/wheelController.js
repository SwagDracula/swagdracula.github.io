const WheelSpin = require('../models/WheelSpin');
const Token = require('../models/Token');
const { getRandomOutcome } = require('../services/wheelService');
const { updateUserTokens } = require('../services/tokenService');

exports.spinWheel = async (req, res) => {
    const userId = req.user.id;

    try {
        // Check if the user has enough tokens to spin the wheel
        const userTokens = await Token.findOne({ userId });
        if (!userTokens || userTokens.balance < 1) {
            return res.status(400).json({ message: 'Not enough tokens to spin the wheel.' });
        }

        // Deduct a token for the spin
        await updateUserTokens(userId, -1);

        // Get a random outcome from the wheel
        const outcome = getRandomOutcome();

        // Log the spin in the database
        const spinRecord = new WheelSpin({ userId, outcome });
        await spinRecord.save();

        // Respond with the outcome
        res.status(200).json({ outcome });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while spinning the wheel.' });
    }
};