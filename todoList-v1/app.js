//jshint esversion:6

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.set('view engine', 'ejs')

app.get('/', function(req, res){
    const today = new Date()
    const currentday = today.getDay()
    if(currentday === 6 || currentday === 0) {
        res.write('<h1> Yay! Its the weekend </h1>')
    } else {
        res.sendFile(__dirname + '/index.html')
    }
})

app.listen(3000, function(){
    console.log('Server started on PORT 3000')
})