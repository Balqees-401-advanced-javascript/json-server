'use strict';

const express = require('express');//because i have to call router from express
const router = express.Router();
const product = require('../lib/models/products/products.collection');
//require product model and use it in my router function 

router.post('/',postProuduct);
router.get('/',getAllProduct);
router.get('/:id',getProductById);
router.put('/:id',updatProductById);
router.delete('/:id',deleteProductById);


function getAllProduct(req,res,next){ // adiing next look like amiddle ware 
//crud operation 
  product.get()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(next);
}
    
function getProductById(req,res,next){
  product.get(req.params.id)
    .then(result =>{
      res.status(200).json(result);
    })
    .catch(next);
}   

function postProuduct(req , res, next){

  product.post(req.body)
    .then (result =>{
      // console.log(result);
      res.status(201).json(result);
    })
    .catch(next);
}


function updatProductById(req,res,next){
  product.put(req.body , req.params.id)
    .then(() =>{
      res.status(201).send('UPDATED');
    })
    .catch(next);
}

function deleteProductById(req,res,next){
  product.delete(req.params.id)
    .then(() =>{
      res.status(200).send('DELETED!');
    })
    .catch(next);
}

module.exports = router;