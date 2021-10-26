var forgetPass = require("../model/forgetpassModel")
var mongoose = require("mongoose")

var User = require("../model/userModel")
exports.forgotPassword = function (req, res) {
    User.updateOne({ _id: req.body._id }, { $set: { password: req.body.password } }, function (err, data) {
        if (err) {
            res.json({
                status: -1,
                data: req.body,
                msg: "Something went wrong"
            })
        }
        else {
            res.json({
                status: 200,
                data: req.body,
                msg: "User Udpated"
            })
        }
    })
}