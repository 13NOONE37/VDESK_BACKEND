const registerModel = require('../../database/LogModels/registerSchema');

module.exports = async (req, res)=>{
     const email = req.params.email;

    try{
        const result = await registerModel.find({email});
        console.log(result);

        if(result.length!=0) return res.status(202).send("Link has been sent on your email");
        else return res.status(204).send("Account does not exist");

    } catch(err) {
        return res.status(422).json({message: err.message});
    }
};

