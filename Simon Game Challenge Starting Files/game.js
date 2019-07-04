let buttonColours = ["red", "blue", "green", "yellow"]

let gamePattern = []
let userClickedPattern = []

let level = 0

function nextSequence() {

  let randomNumber = Math.floor(Math.random() * 4)
  let randomChosenColour = buttonColours[randomNumber]
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100)

  playSound(randomChosenColour)

  level += 1
  $("h1").text("Level " + level)
}

$(".btn").click(function() {
    let userChoosenColor = event.path[0].id
    userClickedPattern.push(userChoosenColor)
    console.log(userClickedPattern)
    animatePress(userChoosenColor)
    playSound(userChoosenColor)
})

function playSound(name) {
    let audio = new Audio("sounds/" + name + ".mp3")
    audio.play()
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed")
    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed")
    }, 100)
}

// Detect keyboard key press only for the first time
$(document).one("keypress", function() {
    nextSequence()
})

function checkAnswer(currentLevel) {
    if (compareArray(currentLevel) == 1) {
        setTimeout(nextSequence(), 1000)
    } else {
        $("h1").text("You Loose!")
    }
}

function compareArray(index) {
    for(let i=0; i < index; i++) {
        if(userClickedPattern[i] == gamePattern[i]) {
            return 1
        } else {
            return 0
        }
    }
}