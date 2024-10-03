const express = require('express');
const authController = require('../controllers/authController')

const router = express.Router()

router.post('/Login', authController.login)
router.post('/SignUp', authController.register)

module.exports = router