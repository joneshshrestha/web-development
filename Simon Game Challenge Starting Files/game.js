let gamePattern = []
let buttonColors = ["red", "blue", "green", "yellow"]
function nextSequence() {
    return Math.floor(Math.random()*4)
}
let randomNumber = nextSequence()
let randomChoosenColor = buttonColors[randomNumber]
gamePattern.push(randomChoosenColor)

$("div#" + randomChoosenColor).fadeOut(250).fadeIn(250)


// $("div#green").click(function() {
//     $("audio#green")[0].play()
// })

// $("div#red").click(function() {
//     $("audio#red")[0].play()
// })

// $("div#yellow").click(function() {
//     $("audio#yellow")[0].play()
// })

// $("div#blue").click(function() {
//     $("audio#blue")[0].play()
// })

