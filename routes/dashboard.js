const express = require("express");
const dashboardController = require('../controller/dashboardController')

const router = express.Router()



router.get('',dashboardController.Home);

router.get('/products', dashboardController.Products);

router.get('/order',dashboardController.Orders)

router.get('/customers',dashboardController.Customers)
router.get('/settings',dashboardController.Settings)



module.exports = router;