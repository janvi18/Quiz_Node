var router = require("express").Router()

var signUpController = require("./controller/signupController")
var examController = require("./controller/examController")

var signUpController=require("./controller/signUpController")

router.route("/signup").post(signUpController.saveuser)
router.route("/login").post(signUpController.login)
router.route("/users/:userId").get(signUpController.getuserByid)
router.route("/updateUser").post(signUpController.updateUser)
router.route("/forgotpassword").post(signUpController.forgotPassword)


module.exports = router