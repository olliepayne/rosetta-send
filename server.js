const express = require('express')
const cors = require('cors')
require('dotenv').config()
require('./config/database')

const authRouter = require('./routers/authRouter')

const app = express()

app.use(express.json())
app.use(cors())

// - - - routers - - -
app.use('/api/auth', authRouter)

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server connected, listening on port ${port}`))