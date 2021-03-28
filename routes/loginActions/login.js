const loginModel = require('../../database/LogModels/loginSchema');

module.exports = async (req, res)=>{
    
    const email = req.body.email;
    const password = req.body.password;
    
    let temp;
    try{
        temp = new loginModel({email: email, password: password});
        await temp.save();
        const result = await loginModel.findOne({email, password});
        
    } catch(err) {
        return res.status(422).json({message: err.message});
    }
        res.status(201).json(result);
        console.log("Znaleziono użytkownika: "+result);
};