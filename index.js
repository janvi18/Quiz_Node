var express = require("express")
var mongoose = require("mongoose")
var apiroutes = require("./api-routes")

var app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// mongoose.connect('mongodb://localhost:27017/nodeexam', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connect('mongodb+srv://janvi123:janvi123@cluster0.l3iat.mongodb.net/Cluster0?retryWrites=true&w=majority',)

app.use("/api", apiroutes)

app.listen(process.env.PORT || 3000, function () {
    console.log("Server Started...");
})