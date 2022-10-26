const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController')

router.get('/getUsers', adminController.getUsers)
router.get('/getApplications', adminController.getApplications)
router.get('/getDividedApplications', adminController.getDividedApplications)
router.post('/nextStage/:id', adminController.nextStage)
// router.post('/addSlots', adminController.addSlots)
// router.post('/getSlots', adminController.getSlots)


module.exports = router;