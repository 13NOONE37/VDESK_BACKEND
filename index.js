const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const {port} = require('./config/serverConfig');
const apiLogin = require('./routes/LogRoutes');

//init database
require('./database/mongoose');

//parser
app.use(bodyParser.json());

//fix cors
app.use(cors());

// routes
app.use('/auth', apiLogin);


// server
app.listen(port, () => {
    console.log("Server listening at port: ", port);
});
