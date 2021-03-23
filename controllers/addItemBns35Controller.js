const data = require('../data/data');
const utilClass = require('../util/UtilClass');

exports.addItemToCart = function(req, res)  {
    const sku = req.body.sku;
    if(data.cart.some(item => item.sku === sku)) {
        data.cart = utilClass.editList(data.cart, '+', sku, false);
    } else {
        var item = data.inventory.find(item => item.sku === sku);
        if(item) {
            var temp = Object.assign({}, item);
            temp.quantity = 1;
            data.cart.push(temp);
        }
    }
    data.inventory = utilClass.editList(data.inventory, '-', sku, true);
    
    res.header("Content-Type: application/json");
    res.send({"inventory" : data.inventory,"cart":data.cart}); 
}
