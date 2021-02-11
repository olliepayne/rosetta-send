const express = require('express')
const router = express.Router()
const authCtrl = require('../controllers/authController')

router.get('/signup', authCtrl.signup)

module.exports = router