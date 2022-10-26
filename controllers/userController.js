const User = require('../models/userModel')
const Admin = require('../models/adminModel')
const Application = require('../models/applicationModel')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
    register: async (req, res) => {
        try {
            const userExists = await User.findOne({ email: req.body.email })

            if (userExists) {
                res.status(200).send({ message: "User already Exists", success: false })
            }

            const password = req.body.password;
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            req.body.password = hashedPassword;
            const newUser = new User(req.body);

            await newUser.save();
            res.status(200).send({ message: "User Created Successfully", success: true })

        } catch (error) {
            console.log(error);
            res.status(500).send({ message: "Error creating user.", success: false, error })
        }
    },
    login: async (req, res, next) => {
        try {
            const user = await User.findOne({ email: req.body.email })
            const admin = await Admin.findOne({ email: req.body.email })
            
            if(admin){
                const passMatch = await bcrypt.compare(req.body.password, admin.password);
                if(passMatch){
                    res.status(200).send({ message: "Login Successful", admin: true})    
                }else{
                    return res.status(200).send({ message: "Password is incorrect.", success: false });
                }
            }else if(user){
                const isMatch = await bcrypt.compare(req.body.password, user.password);
    
                if (!isMatch) {
                    return res.status(200).send({ message: "Password is incorrect.", success: false });
                } else {
                    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
                        expiresIn: '1d'
                    })
                    res.status(200).send({ message: "Login Successful", success: true, data: token })
                }
            }else if (!user) {
                return res.status(200).send({ message: "User does not exist", success: false })
            }


        } catch (error) {
            console.log(error)
            res.status(500).send({ message: "Error logging in.", success: false, error })
        }
    },
    getUserInfo: async (req, res, next) => {
        try {
            const user = await User.findOne({ _id: req.body.userId })
            if (!user) {
                return res.status(200).send({ message: "User doesn't exist", success: false })
            } else {
                const applicationList = await Application.findOne({ userId: req.body.userId })

                return res.status(200).send({
                    success: true, data: {
                        name: user.name,
                        email: user.email
                    }, bookings: applicationList,
                })
            }
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: "Error getting user info.", success: false, error })
        }
    },
    applyBooking: async (req, res, next) => {
        try {
            const application = await Application.findOne({ userId: req.body.userId })
            if (!application) {

                const newApplication = new Application(req.body);
                await newApplication.save()

                return res.status(200).send({
                    success: true,
                    message: "Application successfully submitted!"
                })
            }
        } catch (error) {
            console.log(error);
            return res.status(500).send({
                success: false,
                message: "Failed"
            })

        }
    }

}