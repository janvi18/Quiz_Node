var exam=require("../model/ExamModel")
var topic=require("../model/SubCategory")
var mongoose=require("mongoose")

exports.saveSub=(function(req,res){
    let e =new exam({
        subName:req.body.subName,
    })
    e.save(function(err,data){
        if(err){
            res.json({
                status: -1,
                data: err,
                msg: "Something went wrong"
            })
        }
        else{
            res.json({
                status: 200,
                data: data,
                msg: "Subject Saved"
            })
        }
    })
})
exports.saveTopic=(function(req,res){
    let t=new topic({
        Sub:req.body.subId,
        Topic:req.body.Topic
    })
    t.save(function(err,data){
        if(err){
            res.json({
                status: -1,
                data: err,
                msg: "Something went wrong"
            })
        }
        else{
            res.json({
                status: 200,
                data: data,
                msg: "Topic Saved"
            })
        }

    })
})
exports.deleteTopic=function(req,res){
    topic.findByIdAndDelete({_id:req.params.topicId},function(err,data){
        if(err){
        res.json({
            status: -1,
            data: err,
            msg: "Something went wrong"
        })
    }
    else{
        res.json({
            status: 200,
            data: data,
            msg: "Topic Deleted.."
        })
    }
    })
}