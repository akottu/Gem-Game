var numberToGuess = 0;
var currentScore = 0;

var redButtonValue = 0;
var orangeButtonValue = 0;
var yellowButtonValue = 0;
var greenButtonValue = 0;
var blueButtonValue = 0;
var purpleButtonValue = 0;


var wins = 0;
var losses = 0;

window.onload = function() {

    start();

    document.getElementById("red-button").onclick = function() {redButtonClicked()};
    document.getElementById("orange-button").onclick = function() {orangeButtonClicked()};
    document.getElementById("yellow-button").onclick = function() {yellowButtonClicked()};
    document.getElementById("green-button").onclick = function() {greenButtonClicked()};
    document.getElementById("blue-button").onclick = function() {blueButtonClicked()};
    document.getElementById("purple-button").onclick = function() {purpleButtonClicked()};
   
}

// $("#red-button").click(function() {
//     console.log("reached");
//     currentScore = currentScore + parseInt($("#red-button").attr("value"));
//     $("#current-score-display").text(currentScore.toString());

//     if(currentScore === numberToGuess) {
//         win();
//     }
//     else if(currentScore > numberToGuess) {
//         lose();
//     }
// });

function initializeButtonValues() {

    redButtonValue = Math.floor(Math.random() * 20);
    orangeButtonValue = Math.floor(Math.random() * 20);
    yellowButtonValue = Math.floor(Math.random() * 20);
    greenButtonValue = Math.floor(Math.random() * 20);
    blueButtonValue = Math.floor(Math.random() * 20);
    purpleButtonValue = Math.floor(Math.random() * 20);

    $("#red-button").text(redButtonValue.toString());
    $("#orange-button").text(orangeButtonValue.toString());
    $("#yellow-button").text(yellowButtonValue.toString());
    $("#green-button").text(greenButtonValue.toString());
    $("#blue-button").text(blueButtonValue.toString());
    $("#purple-button").text(purpleButtonValue.toString());

    $("#red-button").attr("value", redButtonValue);
    $("#orange-button").attr("value", orangeButtonValue);
    $("#yellow-button").attr("value", yellowButtonValue);
    $("#green-button").attr("value", greenButtonValue);
    $("#blue-button").attr("value", blueButtonValue);
    $("#purple-button").attr("value", purpleButtonValue);


}



function redButtonClicked() {

    currentScore+= +document.getElementById("red-button").value;
    $("#current-score-display").text(currentScore);

    if(currentScore === numberToGuess) {
            win();
        }
        else if(currentScore > numberToGuess) {
            lose();
        }  
}

function orangeButtonClicked() {

    currentScore+= +document.getElementById("orange-button").value;
    $("#current-score-display").text(currentScore);

    if(currentScore === numberToGuess) {
            win();
        }
        else if(currentScore > numberToGuess) {
            lose();
        }  
}

function yellowButtonClicked() {

    currentScore+= +document.getElementById("yellow-button").value;
    $("#current-score-display").text(currentScore);

    if(currentScore === numberToGuess) {
            win();
        }
        else if(currentScore > numberToGuess) {
            lose();
        }  
}

function greenButtonClicked() {

    currentScore+= +document.getElementById("green-button").value;
    $("#current-score-display").text(currentScore);

    if(currentScore === numberToGuess) {
            win();
        }
        else if(currentScore > numberToGuess) {
            lose();
        }  
}

function blueButtonClicked() {

    currentScore+= +document.getElementById("blue-button").value;
    $("#current-score-display").text(currentScore);

    if(currentScore === numberToGuess) {
            win();
        }
        else if(currentScore > numberToGuess) {
            lose();
        }  
}

function purpleButtonClicked() {

    currentScore+= +document.getElementById("purple-button").value;
    $("#current-score-display").text(currentScore);

    if(currentScore === numberToGuess) {
            win();
        }
        else if(currentScore > numberToGuess) {
            lose();
        }  
}

// $("button").click(function() {
//     currentScore += parseInt($(this).attr("value"));
//     $("#current-score-display").text(currentScore);

//     if(currentScore === numberToGuess) {
//         win();
//     }
//     else if(currentScore > numberToGuess) {
//         lose();
//     }
// });




function start() {
    numberToGuess = Math.floor(Math.random() * 130 + 20);
    currentScore = 0;
    $("#goal-display").text(numberToGuess.toString());
    $("#current-score-display").text(currentScore.toString());
    initializeButtonValues();
}

function win() {
    alert("You win!");
    wins++;
    $("#wins-display").text(wins);
    start();
}

function lose() {
    alert("You lose!");
    losses++;
    $("#losses-display").text(losses);
    start();
}
