const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
 username: { type: String, required: true },
 email: { type: String, required: true },
 password: { type: String, required: true },
 submittedClimbs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Climb' }],
 wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Climb' }]
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)