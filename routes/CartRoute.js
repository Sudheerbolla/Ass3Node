var express = require('express')
var router = express.Router()

var cartController = require('../controllers/getCartBns35Controller.js')
var cartAddController = require('../controllers/addItemBns35Controller.js')
var cartDeleteController = require('../controllers/removeItemBns35Controller.js')
var checkoutController = require('../controllers/checkoutController.js')

router.get('/', cartController.getCartData)

router.delete('/', cartDeleteController.deleteItemFromCart)

router.post('/', cartAddController.addItemToCart)

router.post('/checkout', checkoutController.checkout)

module.exports = router;