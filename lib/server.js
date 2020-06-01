'use strict';

const express = require('express');
const Middle404Ware = require('../middleware/404');
const Middle500Ware = require('../middleware/500');
const loogerMiddleWare = require('../middleware/logger');
const timeStampMiddleWare = require('../middleware/timestamp');

const app = express();

// Global MiddleWare 
app.use(express.json());
// app.use(Middle404Ware);
// app.use(Middle500Ware);
// app.use(loogerMiddleWare);
// app.use(timeStampMiddleWare);


let db=[]; // like memory just restore when we run server
app.post('/products', (req, res,next) => { //read what ever the user trying to bost from req.body
    console.log(req.body);
    let {name} = req.body; //destruction 
    // let category = req.body.category;
    // let display_name = req.body.display_name;
    // let description = req.body.description;
    let record = {
        name 
        // category : category,
        // display_name : display_name,
        // description : description
    }
    record.id = db.length + 1;
    db.push(record);
    res.json(record);
});

module.exports = {
    server: app,
    start: (port) => {
        const PORT = port || process.env.PORT || 3000;
        app.listen(PORT, () => { console.log(`Listening on port ${PORT}`) });
    }
}