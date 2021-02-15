module.exports = {
 checkAuth
}

function checkAuth(req, res, next) {
 const token = req.cookies.token
 if(!token) return
 next()
}