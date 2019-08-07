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
    let amount = req.body.amount

    let options = {
        url: "https://apiv2.bitcoinaverage.com/convert/global",
        method: "GET",
        qs: {
            from: crypto,
            to: fiat,
            amount: amount
        }

    }

    request(options, function(error, response, body){
        let data = JSON.parse(body)
        let price = data.price
        console.log(price)

        let currentDate = data.time

        res.write("<p> The current date is " + currentDate + "</p>")
        res.write("<h1 align='center' style='margin:330px 500px;'>"+ amount + " " + crypto + " is currently worth " + price + " " + fiat + " <h1>")
        res.send()
    })

})

app.listen(3000, function(){
    console.log("Server running on PORT 3000")
})