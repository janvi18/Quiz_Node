var mongoose = require("mongoose")

var signupSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    roleId:{
        type:mongoose.Types.ObjectId
    }
})

module.exports = mongoose.model("Signup", signupSchema)