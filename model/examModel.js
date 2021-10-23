var mongoose=require("mongoose")

var Categoryschema=new mongoose.Schema({

    subName:{
        type:String,
        require:true,
        Unique:true
    }
})

module.exports=mongoose.model("Subject",Categoryschema)