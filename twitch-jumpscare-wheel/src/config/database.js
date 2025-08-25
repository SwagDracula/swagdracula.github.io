const mongoose = require('mongoose');

const dbConfig = {
    uri: process.env.DB_URI || 'mongodb://localhost:27017/twitch-jumpscare-wheel',
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
};

const connectDB = async () => {
    try {
        await mongoose.connect(dbConfig.uri, dbConfig.options);
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = {
    connectDB,
};