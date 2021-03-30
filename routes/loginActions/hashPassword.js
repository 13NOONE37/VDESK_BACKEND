const bcrypt = require('bcrypt');

module.exports = async (password, saltRounds = 4) => {
    try {
        password = toString(password);
            //Generate salt
            const salt = await bcrypt.genSalt(saltRounds);

            //Hash password
            return await bcrypt.hash(password, salt);
    } catch(err) {
            console.log(err);
    }

    //return null if error
    return null;
};
