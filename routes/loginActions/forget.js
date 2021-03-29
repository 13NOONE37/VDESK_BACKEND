const registerModel = require('../../database/LogModels/registerSchema');

module.exports = async (req, res)=>{
     const email = req.params.email;

    try{
        const result = await registerModel.find({email});
        
        res.status(200).json(result);
    } catch(err) {
        return res.status(422).json({message: err.message});
    }
};

