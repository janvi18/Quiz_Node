var loginModel = require('../model/loginModel');

exports.login = function (req, res) {
    let u = new loginModel({
        email: req.body.email,
        password: req.body.password
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
                msg: "User Save Successfully"
            })
        }
    })
}
exports.authenticate = function (req, res) {
}