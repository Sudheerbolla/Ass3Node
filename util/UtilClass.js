const editList = (list, operator, sku, allowZeroQuantities) => {
    return list.map(item => {
        var temp = Object.assign({}, item);
            // console.log("Received add parameter. SKU: " + sku);
        if (temp.sku === sku) {
            if(operator ==='+') {
                temp.quantity = temp.quantity + 1;
            } else {
                if(temp.quantity > 1) {
                    temp.quantity = temp.quantity - 1;
                } else {
                    temp.quantity = 0;
                }
            }
        }
        return temp;
    }).filter(item => {
        if(allowZeroQuantities) {
            return true;
        } else {
            if(item.quantity <= 0) {
                return false;
            } else {
                return true;
            }
        }
    });
}

// var item = cart.find(item => item.sku === sku);
// if(inventory.some(item => item.sku === sku)){}

module.exports = { 'editList': editList }