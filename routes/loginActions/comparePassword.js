
const hashPassword = require('./hashPassword');
const bcrypt = require('bcrypt');

module.exports = async (password, hash) => {
    try {
            const b = hashPassword(password);
            console.log(password, hash, b);
            
            return await bcrypt.compare(password, hash);
    } catch (err) {
            console.log(err);
    }

    //return false if error
    return false;
};
