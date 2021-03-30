const bcrypt = require('bcrypt');

module.exports = async (password, hash) => {
    try {
            console.log(password, hash);
            
            return await bcrypt.compare(password, hash);
    } catch (err) {
            console.log(err);
    }

    //return false if error
    return false;
};
