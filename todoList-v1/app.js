//jshint esversion:6

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.set('view engine', 'ejs')

app.get('/', function(req, res){
    const today = new Date()
    const currentday = today.getDay()
    const day =''

    if(currentday === 6 || currentday === 0) {
        day = 'Weekend'
        res.render('list', {kindOfDay: day})
    } else {
        day = 'Weekday'
    }
})

app.listen(3000, function(){
    console.log('Server started on PORT 3000')
})