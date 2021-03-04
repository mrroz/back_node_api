const express = require('express')

const userControllers = require('../controllers/usercontroller')

const router = express.Router()


router.post('/singup', userControllers.singup)
router.post('/login', userControllers.login)

router.get('/all', userControllers.allUser)


module.exports = router