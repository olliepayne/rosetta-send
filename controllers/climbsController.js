const Climb = require('../models/Climb')

module.exports = {
 create
}

function create(req, res) {
 Climb.create(req.body)
  .then((climb) => res.json(climb))
}

function getOne(req, res) {
 
}