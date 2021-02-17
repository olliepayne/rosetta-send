const express = require('express')
const router = express.Router()
const authMiddleware = require('../config/authMiddleware')
const usersCtrl = require('../controllers/usersController')

// - - - public routes - - -

// - - - private routes - - -
router.post('/:id/addSubmittedClimb', authMiddleware.checkAuth, usersCtrl.addSubmittedClimb)
router.get('/:id/getSubmittedClimbs', authMiddleware.checkAuth, usersCtrl.getSubmittedClimbs)

module.exports = router