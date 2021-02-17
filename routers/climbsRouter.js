const express = require('express')
const router = express.Router()
const authMiddleware = require('../config/authMiddleware')
const climbsCtrl = require('../controllers/climbsController')

// - - - public routes - - -
router.post('/search', climbsCtrl.search)
router.get('/:id', climbsCtrl.getOne)

// - - - private routes - - -
router.post('/', authMiddleware.checkAuth, climbsCtrl.create)
router.put('/:id', authMiddleware.checkAuth, climbsCtrl.update)
router.delete('/:id', authMiddleware.checkAuth, climbsCtrl.delete)

module.exports = router