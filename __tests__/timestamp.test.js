'use strict';

function timeStampMiddleWare(req,res,next){
  var timeInMs = Date();
  console.log('timeStamp',timeInMs);
  next();
}

module.exports = timeStampMiddleWare;

timeStampMiddleWare();