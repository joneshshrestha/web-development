//jshint esversion: 6

let express = require("express")
let bodyParser = require("body-parser")

let app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
})

app.listen(3000, function(){
    console.log("Server running on PORT 3000")
})