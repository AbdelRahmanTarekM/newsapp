const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 10,
        index: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    birthDate:{
        type: Date,
        required: true,
    },
    authToken: {
        type: String
    },
    favorites: [{
        urlToImage: {
            type: String
        },
        title:{
            type: String
        },
        author:{
            type: String
        },
        publishedAt: {
            type: Date
        },
        description: {
            type: String
        },
        url:{
            type: String
        }
    }]

});

const User = mongoose.model('User', UserSchema);

module.exports = User;