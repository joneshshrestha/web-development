//jshint esversion: 6

let express = require("express")
let bodyParser = require("body-parser")
let request = require("request")

let app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
})

app.post("/", function(req, res){
    // console.log(req.body.crypto)

    request("https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD", function(error, response, body){
        console.log(body)
    })

})

app.listen(3000, function(){
    console.log("Server running on PORT 3000")
})