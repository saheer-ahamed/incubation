const mongoose = require('mongoose')


const applicationSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    email: {
        type: String
    },

    mobile: {
        type: Number
    },
    companyName: {
        type: String
    },
    teamManagement: {
        type: String
    },
    companyProfile: {
        type: String
    },
    problem: {
        type: String
    },
    uniqueSolution: {
        type: String
    },
    status: {
        type: String,
        default: "Submitted"
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },

}, { timestamps: true })

const applicationModel = mongoose.model("applications", applicationSchema)

module.exports = applicationModel