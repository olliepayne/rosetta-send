module.exports = {
 addToken
}

const tokens = []

function addToken(token) {
 tokens.push(token)
}

function getToken(req, res) {
 // return the same token that is present in the authorization header on the user's html request
}

function tokenExists(req, res) {
 // use this for auth on the router, check if the token being sent in from the req header exists
}