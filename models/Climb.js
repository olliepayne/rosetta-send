const mongoose = require('mongoose')

const climbSchema = new mongoose.Schema({
 name: { type: String, required: true },
 type: { type: String, required: true },
 grade: { type: String, required: true },
 location: { type: String, required: true }
})

module.exports = mongoose.model('Climb', climbSchema)