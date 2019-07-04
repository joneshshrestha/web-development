let buttonColours = ["red", "blue", "green", "yellow"]

let gamePattern = []
let userClickedPattern = []

let level = 0

function nextSequence() {
    userClickedPattern = []
    let randomNumber = Math.floor(Math.random() * 4)
    let randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100)

    playSound(randomChosenColour)

    level++
    $("h1").text("Level " + level)
}

$(".btn").click(function () {
    let userChoosenColor = event.path[0].id
    userClickedPattern.push(userChoosenColor)
    animatePress(userChoosenColor)
    playSound(userChoosenColor)
    checkAnswer(userClickedPattern.length)
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
$(document).one("keypress", function () {
    nextSequence()
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
        console.log("wrong");
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
