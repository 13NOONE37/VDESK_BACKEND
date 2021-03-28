const moongoose = require('mongoose');
const config = require('../config/serverConfig');

moongoose.connect(config.database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

