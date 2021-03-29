const bcrypt = require('bcrypt');

module.exports = async (password, saltRounds) => {
    try {
        password = toString(password);
            //Generate salt
            const salt = await bcrypt.genSalt(saltRounds);

            //Hash password
            const hash = await bcrypt.hash(password, salt);
            
            console.log(hash);
            return hash;
    } catch(err) {
            console.log(err);
    }

    //return null if error
    return null;
};
/**https://attacomsian.com/blog/nodejs-password-hashing-with-bcrypt */
