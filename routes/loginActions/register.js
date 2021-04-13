const { json } = require('body-parser');
const registerModel = require('../../database/LogModels/registerSchema');
const bcrypt = require('bcrypt');

module.exports = async (req, res)=>{
    try{
        const body = req.body;

        //validation
        if(!(body.username) || !(body.email) || body.password.length<8 || body.password.length>32) return res.status(400).send("Data not formatted properly");

        //checking does user already exists
        let isCreated=false;
        let result;

            result = await registerModel.findOne({email:body.email});
            if(result) isCreated=true;

            result = await registerModel.findOne({username:body.username});
            if(result) isCreated=true;

            if(isCreated) return res.status(200).send("Account already exist");

        //gen salt
        const salt = await bcrypt.genSalt(4);
        
        //add user
        const user = new registerModel(body);

        user.password = await bcrypt.hash(body.password, salt);
        user.save().then((doc) => res.status(201).send("Account created"));

    } catch(err) {
        return res.status(422).json({message: err.message});
    }
};

