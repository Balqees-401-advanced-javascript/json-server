'use strict';
require('dotenv').config();
const server = require('./lib/server');
let port = process.env.PORT;
server.start(port);
