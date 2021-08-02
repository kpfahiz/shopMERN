const express = require("express");
const  productController  = require("../controller/productController");
const router = express.Router()






// Display Specific Product
router.get('/product/:productId', productController.product)

//Search
router.post('/search', productController.search)


//Add

router.route('/add')
    .get(productController.add_get)
    .post(productController.add_post);

//Update

router.post('/update',productController.update )

// delete

router.post('/delete',productController.delete)

module.exports = router;