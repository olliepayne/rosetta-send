const Climb = require('../models/Climb')

module.exports = {
 create
}

function create(req, res) {
 Climb.create(req.body)
  .then((climb) => res.json(climb))
}

function getOne(req, res) {
 // find and return one based of req.params.id
}

// add search function for our climb finder