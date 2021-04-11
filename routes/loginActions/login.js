const { json } = require('body-parser');
const registerModel = require('../../database/LogModels/registerSchema');
const bcrypt = require('bcrypt');

module.exports = async (req, res)=>{

        const body = req.body;
        const user = await registerModel.findOne({email: body.email});

        if(user) {
            const isValid = await bcrypt.compare(body.password, user.password);

            if(isValid) return res.status(200).json({message:"Valid password"})
            else return res.status(400).json({message:"Invalid password"})
        } else 
            res.status(401).json({error:"User does not exist"});

};