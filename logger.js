function auth(req, res, next){  

    console.log('auth......');
    next();

}

function log(req, res, next){  //custom middle ware function

    console.log('logging......');
    next();

}

//export it now
module.exports = log;
module.exports = auth;