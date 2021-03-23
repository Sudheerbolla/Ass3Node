const data = require('../data/data');

exports.checkout = function(req, res)  {
    const sku = req.body.sku;
    console.log("Received add parameter. SKU: " + sku);
    data.cart = data.cart.clear();
    res.header("Content-Type: application/json");
    res.send({"inventory" : data.inventory, "cart": data.cart}); 
}
