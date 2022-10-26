const User = require('../models/userModel')
const Admin = require('../models/adminModel')
const Application = require('../models/applicationModel')
const Slots = require('../models/slotModel')

module.exports = {
    getUsers: async (req, res, next) => {
        try {
            const users = await User.find({})
            res.status(200).send({ message: "Got users Data", success: true, usersData: users })
        } catch (error) {
            res.status(500).send({ message: "Something went wrong", success: false })
        }
    },
    getApplications: async (req, res, next) => {
        try {
            const applications = await Application.find({})
            res.status(200).send({ message: "Got applications", success: true, appLists: applications })
        } catch (error) {
            res.status(500).send({ message: "Something went wrong", success: false })
        }
    },
    getDividedApplications: async (req, res, next) => {
        try {
            const submittedApps = await Application.find({ status: 'Submitted' })
            const approvedApps = await Application.find({ status: 'Approved' })
            const bookedApps = await Application.find({ status: 'Booked' })

            res.status(200).send({
                message: "Got Divided Applications", success: true,
                submittedApps: submittedApps, approvedApps: approvedApps, bookedApps: bookedApps
            })

        } catch (error) {
            res.status(500).send({ message: "Something went wrong", success: false })
        }
    },
    nextStage: async (req, res, next) => {
        try {
            const application = await Application.findOne({ _id: req.params.id })

            if (!application) {
                res.status(200).send({ message: "No applications", success: false })
            } else {
                if (application.status === 'Submitted') {
                    await Application.updateOne({ _id: req.params.id }, { $set: { status: "Approved" } })
                }
                if (application.status === 'Approved') {
                    await Application.updateOne({ _id: req.params.id }, { $set: { status: "Booked" } })
                }
                res.status(200).send({ message: "Moved to next stage.", success: true })
            }

        } catch (error) {
            console.log(error);
            res.status(500).send({ message: "Something went wrong", success: false })
        }
    },
    // getSlots: async (req, res, next) => {
    //     try {
    //         const slots = await Slots.find({})
    //         if (!slots) {
    //             res.status(200).send({ message: "No Slots", success: false })
    //         } else {
    //             res.status(200).send({ message: "Slots", success: true, slotData: slots })
    //         }
    //     } catch (error) {
    //         res.status(500).send({ message: "Something went wrong", success: false })
    //     }
    // },
    // addSlots: async (req, res, next) => {
    //     try {
    //         await Slots.create()
    //         res.status(200).send({ message: "Slots created", success: true })
    //     } catch (error) {
    //         res.status(500).send({ message: "Something went wrong", success: false })
    //     }
    // }
}