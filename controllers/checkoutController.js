const data = require('../data/data');

exports.checkout = function(req, res)  {
    data.cart =[];
    res.header("Content-Type: application/json");
    res.send({"inventory" : data.inventory, "cart": data.cart}); 
}
