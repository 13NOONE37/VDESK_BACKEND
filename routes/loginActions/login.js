const { json } = require('body-parser');
const registerModel = require('../../database/LogModels/registerSchema');
const bcrypt = require('bcrypt');
const { set } = require('mongoose');

module.exports = async (req, res)=>{
//hello wtorek
        const body = req.body;
        const user = await registerModel.findOne({email: body.email});

        if(user) {
            const isValid = await bcrypt.compare(body.password, user.password);

            if(isValid) return res.status(200).json({isValid:true})
            else return res.status(200).json({isValid:false})
        } else 
            res.status(200).json({isValid:false});

};