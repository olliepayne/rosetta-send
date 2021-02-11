const express = require('express')
const router = express.Router()
const authMiddleware = require('../config/authMiddleware')
const authCtrl = require('../controllers/authController')

router.post('/signup', authCtrl.signup)
// login route
// get request to return our token stored on the backend

module.exports = router