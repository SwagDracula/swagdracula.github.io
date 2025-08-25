const mongoose = require('mongoose');

const wheelSpinSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    outcome: {
        type: String,
        required: true
    },
    tokensSpent: {
        type: Number,
        required: true
    },
    spinDate: {
        type: Date,
        default: Date.now
    }
});

const WheelSpin = mongoose.model('WheelSpin', wheelSpinSchema);

module.exports = WheelSpin;