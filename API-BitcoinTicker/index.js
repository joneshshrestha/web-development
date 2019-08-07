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
    let crypto = req.body.crypto
    let fiat = req.body.fiat
    request("https://apiv2.bitcoinaverage.com/indices/global/ticker/" + crypto + fiat, function(error, response, body){
        let data = JSON.parse(body)
        let price = data.last
        console.log(price)

        let currentDate = data.display_timestamp

        res.write("<p> The current date is " + currentDate + "</p>")
        res.write("<h1> The current price of "+ crypto + " is " + price + " " + fiat + " <h1>")
        res.send()
    })

})

app.listen(3000, function(){
    console.log("Server running on PORT 3000")
})