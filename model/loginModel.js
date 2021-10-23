var mongoose = require("mongoose")

var loginSchema = new mongoose.Schema({
    userId: {
        type: Number,
        required: true
    },

    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true

    }
})
module.exports = mongoose.model("Login", loginSchema)