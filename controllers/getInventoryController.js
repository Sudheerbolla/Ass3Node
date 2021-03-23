const data = require('../data/data');

exports.getInventory = function(req, res)  {
    res.header("Content-Type: application/json");
    res.send(data.inventory); 
}


