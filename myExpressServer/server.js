let express = require("express")

let app = express()

app.get("/", function(req, res) {
    res.send("<h1>Hello</h1>")
})

app.get("/contact", function(req, res){
    res.send("<h3>contact@joneshshrestha.com</h3>")
})

app.get("/about", function(req, res){
    res.send("My name is Jonesh Shrestha. Undergraduate at Kathmandu University")
})

app.get("/hobby", function(req, res) {
    res.send("Coffee Code & Beer")
})

app.listen(3000, function(){
    console.log("Server started at port 3000")
})