'use strict';

const {server} = require('../lib/server');
const superTest = require('supertest');
const req = superTest(server); // mock req for my server throw super test // its like this is the local host we write it and add things after it like .get
describe('web server', ()=>{

    it('', ()=>{
       return req.get('/products/1')
         .then(result =>{
              return expect(result.status).toBe(200);
         });        
    });

    it('', ()=>{
        return req.get('/category')
          .then(result =>{
              expect(result.status).toBe(200);
          });        
     });
   
     it('', ()=>{
        return req.post('/products')
          .then(result =>{
              expect(result.status).toBe(200);
          });        
     });


     it('', ()=>{
        return req.post('/products')
        .send({name:"balqees" , category:"hu" , display_name: "gfjfj" ,description:"hhfhf"})
          .then(result =>{
              expect(result.body).toMatchObject({name:"balqees" , category:"hu" , display_name: "gfjfj" ,description:"hhfhf"});
          });        
     }); 

});