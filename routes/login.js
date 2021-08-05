const express = require('express')
const loginController = require('../controller/loginController');

const router = express.Router()

router.get('/',loginController.logIn)

module.exports = router;