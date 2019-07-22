

//displays random number goal 
$(document).ready(function () {
    console.log(guessNumber);
    $("#objective").text(guessNumber);

})


//generates random number
var guessNumber = Math.floor(Math.random() * 200 + 100);
//global variables
var counter = 0
let diamondButton1 = Math.floor(Math.random() * 10);

let diamondButton2 = Math.floor(Math.random() * 10);
let diamondButton3 = Math.floor(Math.random() * 100);
let diamondButton4 = Math.floor(Math.random() * 100);
var diamondButton5 = 2
var diamondButton6 = 3
var diamondButton7 = 1

var wins = 0;
var losses = 0;

reset = function () {
    counter = 0;
    diamondButton1 = Math.floor(Math.random() * 10);
    diamondButton2 = Math.floor(Math.random() * 10);
    diamondButton3 = Math.floor(Math.random() * 100);
    diamondButton4 = Math.floor(Math.random() * 100);
    guessNumber = Math.floor(Math.random() * 200 + 100);
    console.log(guessNumber);

    $(document).ready(function () {
        console.log(guessNumber);
        $("#objective").text(guessNumber);

    })
}

//for loop to generate buttons and populates the buttons with a number on load.
//this is inelegant right? 
for (var i = 0; i < 1; i++) {
    var diamonds =$("<p>");
    diamonds.addClass("diamond-button diamond-button1")
    diamonds.attr("A")
    diamonds.attr("data-diamondvalue", diamondButton1);
    $("#crystals").append(diamonds)

    var diamonds =$("<p>");
    diamonds.addClass("diamond-button diamond-button2");
    diamonds.attr("B");
    diamonds.attr("data-diamondvalue", diamondButton2);
    $("#crystals").append(diamonds);

    var diamonds =$("<p>");
    diamonds.addClass("diamond-button diamond-button3");
    diamonds.attr("C");
    diamonds.attr("data-diamondvalue", diamondButton3);
    $("#crystals").append(diamonds);

    var diamonds =$("<p>");
    diamonds.addClass("diamond-button diamond-button4");
    diamonds.attr("D");
    diamonds.attr("data-diamondvalue", diamondButton4);
    $("#crystals").append(diamonds);

    var diamonds =$("<p>");
    diamonds.addClass("diamond-button diamond-button5");
    diamonds.attr("D");
    diamonds.attr("data-diamondvalue", diamondButton5);
    $("#crystals").append(diamonds);

    var diamonds =$("<p>");
    diamonds.addClass("diamond-button diamond-button6");
    diamonds.attr("D");
    diamonds.attr("data-diamondvalue", diamondButton6);
    $("#crystals").append(diamonds);

    var diamonds =$("<p>");
    diamonds.addClass("diamond-button diamond-button7");
    diamonds.attr("D");
    diamonds.attr("data-diamondvalue", diamondButton7);
    $("#crystals").append(diamonds);
 


$(".diamond-button1").click(function () {
    var audio = new Audio('assets/piano-a.wav');
    audio.play();
});


$(".diamond-button2").click(function () {
    var audio = new Audio('assets/piano-b.wav');
    audio.play();
});

$(".diamond-button3").click(function () {
    var audio = new Audio('assets/piano-c.wav');
    audio.play();
});

$(".diamond-button4").click(function () {
    var audio = new Audio('assets/piano-d.wav');
    audio.play();
});

$(".diamond-button5").click(function () {
    var audio = new Audio('assets/piano-e.wav');
    audio.play();
});

$(".diamond-button6").click(function () {
    var audio = new Audio('assets/piano-f.wav');
    audio.play();
});
$(".diamond-button7").click(function () {
    var audio = new Audio('assets/piano-highg.wav');
    audio.play();
});


/* //how to respond to keys
function myFunction(event) {
    var x = event.charCode || event.keyCode;
    if (x == 111 || x == 79) { // o is 111, O is 79
      alert("You pressed the 'O' key!");
    }
  }
*/


$(".diamond-button").on("click", function () {
    var crystalValue = ($(this).attr("data-diamondvalue"));
    crystalValue = parseInt(crystalValue)
    counter += crystalValue;
    console.log(crystalValue);
    $("#score").text(counter)
    console.log(counter);
    if (counter === guessNumber) {
        reset();
        wins++
        // alert("You win!");
        $("#wins-column").text(wins);  

    }
    else if (counter >= guessNumber) {
        reset();
        losses++;
        // alert("You Lose!")
        $("#losses-column").text(losses); 
        reset();

    }
});

}
//RESET

