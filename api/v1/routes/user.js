const express = require('express')

const userControllers = require('../controllers/usercontroller')

const router = express.Router()


router.post('/singup', userControllers.save)

router.get('/hi', userControllers.hi)


module.exports = router