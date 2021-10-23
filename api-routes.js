var router = require("express").Router()

var signUpController = require("./controller/signupController")
var examController = require("./controller/examController")
const { login } = require("./controller/loginController")

router.route("/signup").post(signUpController.saveuser)
router.route("/login").post(login)



module.exports = router