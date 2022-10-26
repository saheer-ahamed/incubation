const mongoose = require('mongoose')

const adminSchema = mongoose.Schema({
    email: {
        type: String
    },
    password: {
        type: String
    }
}, {timestamps: true})

const adminModel = mongoose.model('admins', adminSchema)

module.exports = adminModel