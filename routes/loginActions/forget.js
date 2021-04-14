const registerModel = require('../../database/LogModels/registerSchema');

module.exports = async (req, res)=>{
     const email = req.params.email;

    try{
        const result = await registerModel.find({email});
        console.log(result);

        if(result.length!=0) return res.status(200).json({found:true});
        else return res.status(200).json({found:false});

    } catch(err) {
        return res.status(422).json({found:false});
    }
};

