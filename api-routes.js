var router = require("express").Router()

var signUpController = require("./controller/signupController")
var examController = require("./controller/examController")

var signUpController=require("./controller/signupController")

router.route("/signup").post(signUpController.saveuser)
router.route("/login").post(loginController.login)
router.route("/users/:userId").get(signUpController.getuserByid)
router.route("/updateUser").post(userController.updateUser)
router.route("/forgotpassword").post(forgetpassController.forgotPassword)


module.exports = router