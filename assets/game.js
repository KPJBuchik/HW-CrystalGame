

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
    var node = document.createTextNode("A");
    var diamonds = $("<div>");
    diamonds.addClass("diamond-button diamond-button1");

   


    diamonds.attr("data-diamondvalue", diamondButton1);
    $("#crystals").append(diamonds);

    var diamonds = $("<img>");
    diamonds.addClass("diamond-button diamond-button2");

    diamonds.attr("src", "https://i5.walmartimages.com/asr/500c6955-8486-4e4e-94d0-62e4803c6b11_1.6ba763f3e6883a709c205e504e5a4589.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF");


    diamonds.attr("data-diamondvalue", diamondButton2);
    $("#crystals").append(diamonds);

    var diamonds = $("<img>");
    diamonds.addClass("diamond-button diamond-button3");

    diamonds.attr("src", "https://images-na.ssl-images-amazon.com/images/I/51FAEEZTvIL._UY395_.jpg");


    diamonds.attr("data-diamondvalue", diamondButton3);
    $("#crystals").append(diamonds);

    var diamonds = $("<img>");
    diamonds.addClass("diamond-button diamond-button4");

    diamonds.attr("src", "https://i5.walmartimages.com/asr/ba889e73-c026-43ab-b8f7-bca8334836e6_1.5c1cd9518c4b29f4b0e7acc304110e49.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF");


    diamonds.attr("data-diamondvalue", diamondButton4);
    $("#crystals").append(diamonds);

    var diamonds = $("<img>");
    diamonds.addClass("diamond-button diamond-button5");

    diamonds.attr("src", "https://images-na.ssl-images-amazon.com/images/I/51JXI%2BtSuRL._UY395_.jpg");


    diamonds.attr("data-diamondvalue", diamondButton5);
    $("#crystals").append(diamonds);

    var diamonds = $("<img>");
    diamonds.addClass("diamond-button diamond-button6");

    diamonds.attr("src", "https://images-na.ssl-images-amazon.com/images/I/51CbypSfqvL._UY395_.jpg");


    diamonds.attr("data-diamondvalue", diamondButton6);
    $("#crystals").append(diamonds);

    var diamonds = $("<img>");
    diamonds.addClass("diamond-button diamond-button7");

    diamonds.attr("src", "https://images-na.ssl-images-amazon.com/images/I/51hoKgv3T6L._UY395_.jpg");


    diamonds.attr("data-diamondvalue", diamondButton7);
    $("#crystals").append(diamonds);
}
/*
$(".diamond-button5").click(function(){
   $(".diamond-button5").hide(4000);
});

$(".diamond-button1").click(function(){
   $(".diamond-button1").hide(4000);
});   
*/
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

function myFunction(event) {
    var x = event.charCode || event.keyCode;
    if (x == 111 || x == 79) { // o is 111, O is 79
      alert("You pressed the 'O' key!");
    }
  }
// only resets counter and guessNumber
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
        $("#wins-column").text(wins); //kind of works but deletes the text?      

    }
    else if (counter >= guessNumber) {
        reset();
        losses++;
        // alert("You Lose!")
        $("#losses-column").text(losses); //kind of works but deletes the text?
        reset();

    }
});


//make buttons disapear occasionally?
//RESET

