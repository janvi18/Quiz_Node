var express = require("express")
var mongoose = require("mongoose")
var apiroutes = require("./api-routes")

var app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect('mongodb://localhost:27017/nodeexam', { useNewUrlParser: true, useUnifiedTopology: true })

app.use("/api", apiroutes)

app.listen(3000, function () {
    console.log("Server Started...");
})