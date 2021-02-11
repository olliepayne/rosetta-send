const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/User')

module.exports = {
 signup
}

function signup(req, res) {
 const { username, email, password, passwordCheck } = req.body

 if (!username || !email || !password || !passwordCheck) return res.status(400).json({ msg: 'Incomplete form.' })

 if (password !== passwordCheck) return res.status(400).json({ msg: 'Passwords do not match.' })

 User.findOne({ email })
  .then((user) => {
   if (user) return res.status(400).json({ msg: 'User already exists.' })

   const newUser = new User({
    username,
    email,
    password
   })

   bcrypt.hash(password, 6, (err, hash) => {
    newUser.password = hash
    newUser.save()
     .then((savedUser) => {
      const token = jwt.sign({ user: savedUser }, process.env.JWT_SECRET)
      res.json({ token })
     })
   })
  })
}