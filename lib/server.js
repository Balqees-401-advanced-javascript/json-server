'use strict';

const express = require('express');
const loogerMiddleWare = require('../middleware/logger');
const timeStampMiddleWare = require('../middleware/timestamp');
const Middle404Ware = require('../middleware/404');
const Middle500Ware = require('../middleware/500');

const app = express();

// Global MiddleWare 
app.use(express.json());
// app.use(timeStampMiddleWare);
app.use(loogerMiddleWare);






//-------------------------------------------------------------------PRODUCTS


let db=[]; // like memory just restore when we run server
app.post('/products',timeStampMiddleWare,(req, res,next) => { //read what ever the user trying to bost from req.body
    console.log(req.body);
    let name = req.body.name; //destruction 
    let category = req.body.category;
    let display_name = req.body.display_name;
    let description = req.body.description;
    let record = {
        name : name,
        category : category,
        display_name : display_name,
        description : description
    }
    record.id = db.length + 1;
    db.push(record);
    res.json(record);
});

app.get('/products', (req, res) => {
    let send = db;
     res.status(200).json(send);
})


app.get('/products/:id', (req, res) => {
    for(let i=0 ; i<db.length; i++){
        // console.log('mpefpetmpbk',db[i].id);
        // console.log('mpefpetmbbbbbbbbbbbbpbk',req.params.id);
        if (db[i].id == req.params.id ){
            let send = db[i];
            res.status(200).json(send);
        }
    }
  
})

app.put('/products/:id', (req, res) => {
    for(let i=0 ; i<db.length; i++){
    
        if (db[i].id == req.params.id ){
            db[i].name = req.body.name;
            db[i].category = req.body.category;
            db[i].display_name = req.body.display_name;
            db[i].description = req.body.description;
            res.status(200).json('updated!');
        }
    }
})

app.delete('/products/:id', (req, res) => {

    for(let i=0 ; i<db.length; i++){
    
        if (db[i].id == req.params.id ){
            delete db[i],
            res.status(200).json('deleted');
        }
    }
})

//------------------------------------------------------Category



let dbCat=[]; // like memory just restore when we run server
app.post('/category', (req, res,next) => { //read what ever the user trying to bost from req.body
    console.log(req.body);
    let name = req.body.name; //destruction 
    let display_name = req.body.display_name;
    let description = req.body.description;
    let record = {
        name : name,
        display_name : display_name,
        description : description
    }
    record.id = dbCat.length + 1;
    dbCat.push(record);
    res.json(record);
});

app.get('/category', (req, res) => {
    let send = dbCat;
    res.status(200).json(send);
})


app.get('/category/:id', (req, res) => {
    for(let i=0 ; i<dbCat.length; i++){
        console.log(dbCat[i].id);
        console.log(req.params.id);
        if (dbCat[i].id == req.params.id ){
            let send = dbCat[i];
            res.status(200).json(send);
        }
    }
})

app.put('/category/:id', (req, res) => {
    for(let i=0 ; i<dbCat.length; i++){
    
        if (dbCat[i].id == req.params.id ){
            dbCat[i].name = req.body.name;
            dbCat[i].category = req.body.category;
            dbCat[i].display_name = req.body.display_name;
            dbCat[i].description = req.body.description;
            res.status(200).json('updated!');
        }
    }
})

app.delete('/category/:id', (req, res) => {

    for(let i=0 ; i<dbCat.length; i++){
    
        if (dbCat[i].id == req.params.id ){
            delete dbCat[i],
            res.status(200).json(`delete the OBJ with id : ${req.params.id}`);
        }
    }

})
//------------------------------------------------------------------
app.use('*', Middle404Ware); // 404
app.use(Middle500Ware); //500

module.exports = {
    server: app,
    start: (port) => {
        const PORT = port || process.env.PORT || 3000;
        app.listen(PORT, () => { console.log(`Listening on port ${PORT}`) });
    }
}