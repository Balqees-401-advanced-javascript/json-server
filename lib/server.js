'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
// requer my own modules
const productRout = require('../routes/product');
const categoryRout =require('../routes/categories');


const app = express();

// Global MiddleWare-----------------------------
// Express middleware
app.use(express.json());//parsing the post request 

// 3rd party middleware
app.use(cors()); // allow to access every thing
app.use(morgan('dev'));//which inviromint i'm in

// all routes code
// product rout
app.use('/products',productRout);//"here we can add a prefix"
app.use('/category' , categoryRout);

module.exports = {
  server: app,
  start: (port) => {
    const PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => { console.log(`Listening on port ${PORT}`); });
  },
};
