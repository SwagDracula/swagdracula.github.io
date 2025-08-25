const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    tokens: {
        type: Number,
        default: 0
    },
    lastUpdated: {
        type: Date,
        default: Date.now
    }
});

tokenSchema.methods.addTokens = function(amount) {
    this.tokens += amount;
    this.lastUpdated = Date.now();
    return this.save();
};

tokenSchema.methods.spendTokens = function(amount) {
    if (this.tokens < amount) {
        throw new Error('Not enough tokens');
    }
    this.tokens -= amount;
    this.lastUpdated = Date.now();
    return this.save();
};

const Token = mongoose.model('Token', tokenSchema);

module.exports = Token;