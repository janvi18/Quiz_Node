var router = require("express").Router()

var signUpController = require("./controller/signupController")
var loginController = require("./controller/loginController")
var userController = require('./controller/userController')
var forgetpassController = require("./controller/forgetpassController")

router.route("/signup").post(signUpController.saveuser)
router.route("/login").post(loginController.login)
router.route("/updateUser").post(userController.updateUser)
router.route("/forgotpassword").post(forgetpassController.forgotPassword)


module.exports = router