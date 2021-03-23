const data = require('../data/data');

exports.getCartData = function(req, res)  {
    res.header("Content-Type: application/json");
    res.send(data.cart); 
}

