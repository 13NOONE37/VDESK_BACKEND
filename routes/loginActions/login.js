const { json } = require('body-parser');
const registerModel = require('../../database/LogModels/registerSchema');
const comparePassword = require('../loginActions/comparePassword');
const hashPassword = require('../loginActions/hashPassword');

module.exports = async (req, res)=>{
     
    try{
        const result = await registerModel.find({email: req.body.email});

        if(result.length!=0) {
            const correct = await comparePassword(req.body.password, result[0].password);

            if(correct) return res.status(200).send("Logged succesful"); 
        }

        
        res.status(201).send("Data uncorrected"); //zmienic na odpowiedni kod chyba zeby w reacie zdecydowac czy zalogowano

    } catch(err) {
        return res.status(422).json({message: err.message});
    }

};

