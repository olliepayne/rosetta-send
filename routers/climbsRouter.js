const express = require('express')
const router = express.Router()
const authMiddleware = require('../config/authMiddleware')
const climbsCtrl = require('../controllers/climbsController')

// - - - public routes - - -
router.post('/search', climbsCtrl.search)
router.get('/:id', climbsCtrl.getOne)

// - - - private routes - - -
router.post('/', authMiddleware.checkAuth, climbsCtrl.create)

module.exports = router