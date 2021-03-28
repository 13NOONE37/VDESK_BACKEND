const registerModel = require('../../database/LogModels/registerSchema');

module.exports = async (req, res)=>{
    
    // const email = req.body.email;
    // const usernname = req.body.username;
    // const password1 = req.body.password1;
    // const password2 = req.body.password2;
    const email = 'aaaaaaaaaaaaaaaa';
    const usernname = 'bbbbbbbbbbbbbbbb';
    const password1 = 'ccccccccc';
    const password2 = 'ddddddddddddd';

    console.log("action");

    let temp;
    try{
        temp = new registerModel({email, username, password1, password2});
        await temp.save();
    } catch(err) {
        return res.status(422).json({message: err.message});
    }
};