'use strict';

// error Handler : 500 : Server Error
function Middle500Ware(err, req, res, next) {
    res.status(500);
    res.json({err: err});
    next();
}

module.exports = Middle500Ware;