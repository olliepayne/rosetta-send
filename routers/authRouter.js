const express = require('express')
const router = express.Router()
const authMiddleware = require('../config/authMiddleware')
const authCtrl = require('../controllers/authController')

// - - - public routes - - -
router.post('/signup', authCtrl.signup)
router.post('/login', authCtrl.login)

// - - - private routes - - -
router.get('/getUser', authMiddleware.checkAuth, authCtrl.getUser)
router.get('/logout', authMiddleware.checkAuth, authCtrl.logout)
router.delete('/deleteUser', authMiddleware.checkAuth, authCtrl.delete)

module.exports = router