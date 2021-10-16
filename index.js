var express = require("express")
var mongoose = require("mongoose")
var apiRoutes = require("./api-routes")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


mongoose.connect('mongodb://localhost:27017/nodeexam', { useNewUrlParser: true, useUnifiedTopology: true });


app.use("/api", api-routes);


app.listen(9000, function () {
    console.log("Server Started");
})