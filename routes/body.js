function body(req, res, next) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        console.log(req.body);
    } else {
        next();
    }
}

module.exports = body;