const express = require('express')
const router = express.Router()
const User  = require('../models/User')
const controller = require('../controllers/controller')
router.use(express.urlencoded({extended:true}))

router.post('/api/login', controller.login)
router.post('/api/updateRecipe', controller.updateRecipe)
router.post('/api/createAccount', controller.createAccount)

module.exports = router