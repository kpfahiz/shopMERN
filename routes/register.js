const express = require('express')
const registerController = require('../controller/registerController');



const router = express.Router()

router.get('/',registerController.register);
router.post('/',registerController.add_user);
router.get('/form/:userId',registerController.form);
router.post('/add_details',registerController.add_details)
router.get('/seller',registerController.seller);
router.post('/seller',registerController.addseller);


module.exports = router;