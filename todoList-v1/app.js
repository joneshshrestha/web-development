//jshint esversion:6

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.set('view engine', 'ejs')

app.get('/', function(req, res){
    let today = new Date()
    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }

    let day = today.toLocaleDateString("en-US", options)
    res.render('list', {kindOfDay: day})

})

app.listen(3000, function(){
    console.log('Server started on PORT 3000')
})