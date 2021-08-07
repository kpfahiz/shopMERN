const express = require('express')
const loginController = require('../controller/loginController');

const router = express.Router()

router.get('/',loginController.logIn)
router.post('/',loginController.postlogin)

module.exports = router;