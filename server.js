const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
require('./config/database')

const authRouter = require('./routers/authRouter')
const climbsRouter = require('./routers/climbsRouter')

const app = express()

app.use(express.json())
app.use(cors())
app.use(cookieParser())

// - - - routers - - -
app.use('/api/auth', authRouter)
app.use('/api/climbs', climbsRouter)

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server connected, listening on port ${port}`))