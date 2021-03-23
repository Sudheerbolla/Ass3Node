var express = require('express')
var router = express.Router()

var getInventoryController = require('../controllers/getInventoryController.js')

router.get('/', getInventoryController.getInventory)

module.exports = router;