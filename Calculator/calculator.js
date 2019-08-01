let express = require("express")
let bodyParser = require("body-parser")

let app = express()
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html")
})

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmicalculator", function(req, res){
    console.log(req.body)
    let weight = Number(req.body.weight)
    let height = Number(req.body.height)

    let bmi = (weight / (height * height))
    res.send("Your BMI is " + bmi)
})

app.post("/", function(req, res){

    console.log(req.body)

    let num1 = Number(req.body.num1)
    let num2 = Number(req.body.num2)
    let result = num1 + num2

    res.send("Your Result is " + result)
})

app.listen(3000, function(){
    console.log("Listening at Port 3000")
})