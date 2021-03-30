const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        match: /.+\@.+\..+/,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 32,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },

});

const registerModel = mongoose.model('user', registerSchema);

module.exports = registerModel;


