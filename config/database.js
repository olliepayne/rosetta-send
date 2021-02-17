const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, {
 useUnifiedTopology: true,
 useCreateIndex: true,
 useNewUrlParser: true,
 useFindAndModify: true
})

const db = mongoose.connection
db.once('open', () => console.log(`MongoDB database connected at ${process.env.DATABASE_URL}`))

module.exports = mongoose