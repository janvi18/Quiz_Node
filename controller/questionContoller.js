var ques=require("../model/questionModel")
var mongoose=require("mongoose")

exports.saveQuestion=function(req,res){
    let q=new ques({
        category:req.body.subid,
        subCat:req.body.topicid,  
    })
}