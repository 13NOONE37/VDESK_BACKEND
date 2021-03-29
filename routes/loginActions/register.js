const registerModel = require('../../database/LogModels/registerSchema');
const hashPassword = require('../loginActions/hashPassword');

module.exports = async (req, res)=>{
    
     const email = req.body.email;
     const username = req.body.username; 
     const password = hashPassword(req.body.password, 4);
    
    try{
        //checking does user already exists
        let isCreated=false;
        let result;

            result = await registerModel.find({email:email});
            if(result.length!=0) isCreated=true;

            result = await registerModel.find({username:username});
            if(result.length!=0) isCreated=true;

            if(isCreated) return res.status(200).send("Account already exist");

        //add new user
        const temp = new registerModel({email, username, password});
             console.log(temp);//delete 
            await temp.save();
             res.status(201).send("Saved succesfuly");
    } catch(err) {
        return res.status(422).json({message: err.message});
    }
};

