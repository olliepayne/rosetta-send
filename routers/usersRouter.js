const express = require('express')
const router = express.Router()
const authMiddleware = require('../config/authMiddleware')
const usersCtrl = require('../controllers/usersController')

// - - - public routes - - -

// - - - private routes - - -
router.put('/:id', authMiddleware.checkAuth, usersCtrl.update)
router.delete('/:id', authMiddleware.checkAuth, usersCtrl.delete)

module.exports = router