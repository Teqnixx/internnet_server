const express = require("express")
const router = express.Router()

const internnetController = require('../controller/internnet.controller.js')

router.get("/users", internnetController.getAll)
router.get("/users/:username", internnetController.getOne)
router.get("/announcements/post", internnetController.postAnnouncement)

module.exports = router