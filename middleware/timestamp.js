'use strict';
module.exports = (req, res, next) => {
    let time = new Date();
    req.time =time;
    //console.log('TIME & DATE',req.time);
    next();
}
