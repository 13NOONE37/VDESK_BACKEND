const express = require('express');
const router = express.Router(); 

//actions
const login = require('./loginActions/login');
const register = require('./loginActions/register');
const forget = require('./loginActions/forget');

//redirect to login page, chyba usunąć bo i tak wszysko będziemy realizować w reacie
router.get('/', (req, res) => {
    res.send("Server is working");
});

//login
router.post('/login', login);
//register
router.post('/register', register);
//forget
router.post('/forget', forget);

module.exports = router;