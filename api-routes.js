var router = require("express").Router()

var signupcontroller = require("./controller/signupcontroller")
var logincontroller = require("./controller/logincontroller")

router.route("/signup").post(signupcontroller.signup)
router.route("/login").post(logincontroller.login)


module.exports = router
