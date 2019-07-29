let express = require("express")

let app = express()

app.get("/", function(request, response) {
    response.send("Hello")
})
app.listen(3000, function(){
    console.log("Server started at port 3000")
})