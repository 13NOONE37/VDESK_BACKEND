const { json } = require('body-parser');
const registerModel = require('../../database/LogModels/registerSchema');

module.exports = async (req, res)=>{
    
     const email = req.body.email;
     const password = req.body.password;
     //console.log(req.connection.remoteAddress, email, password);

    try{
        const result = await registerModel.find({email:email, password:password});

        if(result.length!=0) return res.status(200).json(result);  //TODO DELETE .json(result) tylko do testów, w oficjalnym zwracać tylko id oraz informacje czy user sie zalogował
        res.status(201).send("Data uncorrected"); //zmienic na odpowiedni kod chyba zeby w reacie zdecydowac czy zalogowano
    } catch(err) {
        return res.status(422).json({message: err.message});
    }

};

