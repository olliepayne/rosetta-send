module.exports = {
 checkAuth
}

function checkAuth(req, res, next) {
 const token = req.cookies['token']
 if(!token) return res.status(400).json({ msg: 'You must be logged in.' })
 next()
}