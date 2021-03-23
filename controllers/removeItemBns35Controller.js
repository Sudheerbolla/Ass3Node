const data = require('../data/data');
const utilClass = require('../util/UtilClass');

exports.deleteItemFromCart = function(req, res)  {
    const sku = req.body.sku;
    console.log("Received delete parameter. SKU: " + sku);
    data.cart = utilClass.editList(data.cart, '-', sku, false);
    data.inventory = utilClass.editList(data.inventory, '+', sku, true);
    res.header("Content-Type: application/json");
    res.send({"inventory" : data.inventory,"cart":data.cart}); 
}
