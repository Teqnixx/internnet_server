const express = require("express")
const router = express.Router()

const internnetController = require('../controller/internnet.controller.js')

router.get("/users", internnetController.getAll)

module.exports = router