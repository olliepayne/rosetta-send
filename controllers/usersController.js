const User = require('../models/User')

module.exports = {
 addSubmittedClimb,
 getSubmittedClimbs
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
   if(user) {
     if(user.submittedClimbs) {
      res.json(user.submittedClimbs)
     } else {
      res.json({ msg: 'User has not submitted any climbs.' })
     }
   } else {
    res.json({ msg: 'User does not exist.' })
   }
  })
}