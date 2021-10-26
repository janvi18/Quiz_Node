var mongoose = require("mongoose")

var signupSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    roleId: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Signup", signupSchema)