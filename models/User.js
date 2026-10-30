const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    googleId: { 
        type: String,
        required: true, 
        unique: true
    },
    displayName: { 
        type: String,
        required: true
    },
    firstName: { 
        type: String,
        required: true
    },
    lastName: { 
        type: String,
        required: true
    },
    email: { 
        type: String
    },
    createdAt: {
        type: Date, 
        default: Date.now
    },
    isAdmin: {
        type: Boolean
    }
});

module.exports = mongoose.model('User', UserSchema);