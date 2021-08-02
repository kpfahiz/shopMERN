const orderController = require('../controller/orderController')
const express = require('express')

const router = express.Router()


router.get('/', orderController.home)


module.exports = router;