let buttonColours = ["red", "blue", "green", "yellow"]

let gamePattern = []
let userClickedPattern = []

let level = 0
let started = false

function nextSequence() {
    userClickedPattern = []
    level++
    let randomNumber = Math.floor(Math.random() * 4)
    let randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100)

    playSound(randomChosenColour)

    $("h1").text("Level " + level)
}

$(".btn").click(function () {
    let userChoosenColor = event.path[0].id
    userClickedPattern.push(userChoosenColor)
    animatePress(userChoosenColor)
    playSound(userChoosenColor)
    checkAnswer(userClickedPattern.length-1)
})

function playSound(name) {
    let audio = new Audio("sounds/" + name + ".mp3")
    audio.play()
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed")
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed")
    }, 100)
}

// Detect keyboard key press only for the first time
// $(document).one("keypress", function () {
//     nextSequence()
// })

$(document).keypress(function() {
    if (!started) {
      $("#level-title").text("Level " + level)
      nextSequence()
      started = true
    }
  })

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        console.log("wrong")
        playSound("wrong")
        $("body").addClass("game-over")
        setTimeout(function() {
            $("body").removeClass("game-over")
        }, 200)
        $("h1").text("Game Over, Press Any Key to Restart")
        startOver()
    }
}

// function compareArray(index) {
//     for (let i = 0; i < index; i++) {
//         if (userClickedPattern[i] === gamePattern[i]) {
//             return 1
//         } else break;
//     }
// }

// function compareArray() {
//     if (JSON.stringify(userClickedPattern) === JSON.stringify(gamePattern)) {
//         return 1
//     } else {
//         return 0
//     }
// }

function startOver() {
    level = 0
    gamePattern = []
    started = false
}