const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 32,
    },
    password1: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 32,
    },
    password2: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 32,
    },

});

const registerModel = mongoose.model('newUsers', registerSchema);

module.exports = registerModel;


