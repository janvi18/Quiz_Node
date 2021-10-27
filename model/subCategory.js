var mongoose=require("mongoose")
var subCategory=new mongoose.Schema({
    
    Topic:{
        type:String,
        require:true,
        Unique:true
    },
    Sub:{
        type:mongoose.Schema.Types.ObjectId
        ,ref:"Subject"
    }
})
module.exports=mongoose.model("Topic",subCategory)