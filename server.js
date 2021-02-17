const express = require('express')
const path = require('path')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
require('./config/database')

const authRouter = require('./routers/authRouter')
const usersRouter = require('./routers/usersRouter')
const climbsRouter = require('./routers/climbsRouter')

const app = express()

app.use(express.json())
app.use(cors())
app.use(cookieParser())

// - - - routers - - -
app.use('/api/auth', authRouter)
app.use('/api/users', usersRouter)
app.use('/api/climbs', climbsRouter)

if(process.env.NODE_ENV === 'production') {
 app.use(express.static(path.join(__dirname, 'build')));

 app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
 });
}

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server connected, listening on port ${port}`))