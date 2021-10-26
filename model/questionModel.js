var mongoose=require("mongoose")

var questionSchmea=mongoose.Schema({
    category:{
        sub_Id:mongoose.Schema.Types.ObjectId,
        ref:"Subject",
        require:true
    },subCat:{
        topic_Id:mongoose.Schema.Types.ObjectId,
        ref:"Topic",
        require:true
    },
    question:{
        type:String,
        require:true,   
    },
    option1:{
        type:String,
        require:true
    },
    option2:{
        type:String,
        require:true
    },option3:{
        type:String,
        require:true
    },option4:{
        type:String,
        require:true
    },ans:{
        type:String,
        require:true
    }
})
module.exports=mongoose.Schema("Question",questionSchmea)