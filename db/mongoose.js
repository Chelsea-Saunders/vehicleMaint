const mongoose = require('mongoose');

const connectMongoose = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'vehicleMaintenance'
        });
        console.log('Mongoose connected');
    } catch (err) {
        console.error('Mongoose connection error:', err);
        process.exit(1);
    }
};
module.exports = connectMongoose;