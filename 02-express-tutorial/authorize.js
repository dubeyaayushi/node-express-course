const authorize = (req, res, next ) => {
    console.log('authorize')

    const {user} = req.query;
    if(user === 'jhon'){
        req.usser = { name: 'john' , id:3}
        next()
    }
    else{
        res.status(401).send('unauthorized')
    }
}


module.exports = authorize 