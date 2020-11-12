const express = require("express")
const router = express.Router()

const {facebooklogin} = require("../controllers/auth")

router.post("/facebooklogin",facebooklogin)

module.exports = router