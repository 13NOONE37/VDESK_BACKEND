const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');

const {port} = require('./config/serverConfig');
const apiLogin = require('./routes/LogRoutes');

//init database
require('./database/mongoose');

// routes
app.use('/', apiLogin);

//parser
app.use(bodyParser.json());

//fix cors
app.use(cors());

// server
app.listen(port, () => {
    console.log("Server listening at port: ", port);
});
