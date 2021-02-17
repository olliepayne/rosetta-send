const User = require('../models/User')

module.exports = {
 delete: deleteOne,
 addSubmittedClimb,
 getSubmittedClimbs
}

function deleteOne(req, res) {

}

function addSubmittedClimb(req, res) {
 User.findById(req.params.id)
  .then((user) => {
   user['submittedClimbs'].push(req.body)
   user.save()
  })
}

function getSubmittedClimbs(req, res) {
 User.findById(req.params.id)
  .populate('submittedClimbs')
  .exec((err, user) => {
   if(user.submittedClimbs) res.json(user.submittedClimbs)
  })
}