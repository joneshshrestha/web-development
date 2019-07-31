let express = require("express")
let bodyParser = require("body-parser")

let app = express()
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html")
})

app.post("/", function(req, res){

    console.log(req.body)
    res.send("Thanks for posting")
})

app.listen(3000, function(){
    console.log("Listening at Port 3000")
})