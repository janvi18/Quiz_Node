var User = require("../model/signupModel")
var mongoose = require("mongoose")
exports.saveuser = function (req, res) {

    let u = new User({
        firstName: req.body.firstName,
        email: req.body.email,
        password: req.body.password,
        roleId: 2
    })

    u.save(function (err, data) {
        if (err) {
            res.json({
                status: -1,
                data: err,
                msg: "Something went wrong"
            })
        } else {
            res.json({
                status: 200,
                data: data,
                msg: "user save successfully"
            })
        }
    })
}

exports.login = function (req, res) {
    let email = req.body.email;
    let password = req.body.password;

    User.find({ $and: [{ "email": email }, { "password": password }] }, function (err, data) {
        if (err) {
            res.json({
                status: -1,
                data: err,
                msg: "Something went wrong"
            })
        }
        else {
            if (data.length == 0) {
                res.json({
                    status: -1,
                    data: { "email": email, "password": password },
                    msg: "Invalid Credentials"
                })

            } else {
                res.json({
                    status: 200,
                    data: data,
                    msg: "Sucess"
                })
            }
        }
    })
}
exports.getuserByid = function (req, res) {
    console.log(req.params.userId)
    if (mongoose.isValidObjectId(req.params.userId)) {
        User.find({ _id: req.params.userId }, function (err, data) {
            if (err) {
                res.json({
                    status: -1,
                    data: err,
                    msg: "Something went Wrong"
                })
            }
            else {
                if (data.length == 0) {
                    res.json({
                        status: -1,
                        data: req.params.userId,
                        msg: "Invalid UserId"
                    })
                }
                else {
                    res.json({
                        status: 200,
                        data: data,
                        msg: "Success...."
                    })
                }
            }
        })
    }
    else {
        res.json({
            status: -1,
            data: req.params.userId,
            msg: "Invalid UserId"
        })
    }
}