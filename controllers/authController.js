const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/User')

module.exports = {
 signup,
 login
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
      res.cookie("token", token)
      res.json({ token })
     })
   })
  })
}

function login(req, res) {
 const { email, password } = req.body

 if (!email || !password) return res.status(400).json({ msg: 'Incomplete form.' })

 User.findOne({ email })
  .then((user) => {
   if (!user) return res.status(400).json({ msg: 'User does not exist.' })

   bcrypt.compare(password, user.password, (err, match) => {
    if (!match) return res.status(400).json({ msg: 'Invalid Credentials.' })

    const token = jwt.sign({ user }, process.env.JWT_SECRET)
    res.cookie("token", token)
    res.json({ token })
   })
  })
}