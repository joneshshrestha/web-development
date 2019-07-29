let express = require("express")

let app = express()

app.get("/", function(req, res) {
    response.send("<h1>Hello</h1>")
})
app.listen(3000, function(){
    console.log("Server started at port 3000")
})