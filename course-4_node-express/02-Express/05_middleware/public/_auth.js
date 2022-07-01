const auth = (req, res, next) => {
    if(String(req.query.user) !== 'undefined' && String(req.query.user).match(/^([a-zA-Z])(\w*)$/gi) !== null ){
        console.log('Authorized', req.query);
        next()
    }
    else {
        res.status(401).send('Unauthorized')
    }
}

module.exports = auth