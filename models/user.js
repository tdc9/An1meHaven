const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName : {
        type: String,
        required: 'true',

    },
    userName : {
        type: String, 
        required : 'true',
    },
    email : {
        type: String,
        required: 'true',
        unique: 'true'
    },
    password : {
        type: String,
        required: 'true'
    },
    role : {
        type: String,
        default: 'Normie',
        required: 'true',
    },
    profilePicture : {
        type: String,
        default: 'default.jpg'
    },
});

const User = mongoose.model("user", userSchema);

module.exports = User;

