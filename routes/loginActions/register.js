const registerModel = require('../../database/LogModels/registerSchema');
const hashPassword = require('../loginActions/hashPassword');

module.exports = async (req, res)=>{
    
     const email = req.body.email;
     const username = req.body.username; 
     let password = req.body.password;

    try{
        //checking length of password
            if(password.length<8) return res.status(200).send("Password is too short");
            if( password.length>32) return res.status(200).send("Password is too long");

        //checking does user already exists
        let isCreated=false;
        let result;

            result = await registerModel.find({email:email});
            if(result.length!=0) isCreated=true;

            result = await registerModel.find({username:username});
            if(result.length!=0) isCreated=true;

            if(isCreated) return res.status(200).send("Account already exist");

        //hash password
          password = await hashPassword(password); //sama funkcja jest asychroniczna wiec zwraca promisa dlatego tutaj tez nalzy uzyc await
        
        //add new user
        const temp = new registerModel({email, username, password});
             console.log(temp);//delete 
            await temp.save();
             res.status(201).send("Saved succesfuly");
    } catch(err) {
        return res.status(422).json({message: err.message});
    }
};

