//jshint esversion:6

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.set('view engine', 'ejs')

app.get('/', function(req, res){
    let today = new Date()
    let currentday = today.getDay()
    let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let day =''

    if(currentday === 6 || currentday === 0) {
        day = daysOfWeek[currentday]
    } else {
        day = daysOfWeek[currentday]
    }

    res.render('list', {kindOfDay: day})

})

app.listen(3000, function(){
    console.log('Server started on PORT 3000')
})