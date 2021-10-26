var User = require("../model/userModel")
var mongoose = require("mongoose")

exports.updateUser = function (req, res) {
    User.updateOne({ _id: req.body._id }, { $set: { firstName: req.body.firstName } }, function (err, data) {
        if (err) {
            res.json({
                status: -1,
                data: err,
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