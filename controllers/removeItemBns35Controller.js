const data = require('../data/data');
const utilClass = require('../util/UtilClass');

exports.deleteItemFromCart = function(req, res)  {
    const sku = req.body.sku;
    console.log("Received delete parameter. SKU: " + sku);
    data.cart = utilClass.editList(data.cart, '-', sku, false);
    data.inventory = utilClass.editList(data.inventory, '+', sku, true);
    // var item = cart.find(item => item.sku === sku);
    // if(inventory.some(item => item.sku === sku)){}
    res.header("Content-Type: application/json");
    res.send({"inventory" : data.inventory,"cart":data.cart}); 
}
