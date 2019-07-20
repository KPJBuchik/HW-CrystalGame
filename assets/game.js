

//displays random number goal 
$(document).ready(function () {
    console.log(guessNumber);
    $("#objective").text(guessNumber);
})
//generates random number
var guessNumber = Math.floor(Math.random() * 200 + 100);
//global variables
var counter = 0
var wins = 0;
var losses = 0;

var diamondButton1 = Math.floor(Math.random() * 10);
(console.log(diamonds))
var diamondButton2 = Math.floor(Math.random() * 10);
var diamondButton3 = Math.floor(Math.random() * 100);
var diamondButton4 = Math.floor(Math.random() * 100);



//for loop to generate buttons and populates the buttons with a number on load
for (var i = 0; i < 4; i++) {

    var diamonds = $("<img>");
    diamonds.addClass("diamond-button");

    diamonds.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");


    diamonds.attr("data-diamondvalue", diamondButton1,);
    $("#crystals").append(diamonds);

}
var reset = function () {
    counter = 0;
    var guessNumber = Math.floor(Math.random() * 200 + 100);
    console.log(guessNumber);
    $(document).ready(function () {
        console.log(guessNumber);
        $("#objective").text(guessNumber);
    })
}

$(".diamond-button").on("click", function () {

    var crystalValue = ($(this).attr("data-diamondvalue"));
    crystalValue = parseInt(crystalValue)
    counter += crystalValue;
    console.log(crystalValue);
    $("#score").text(counter)
    console.log(counter);
    if (counter === guessNumber) {
        wins++
        alert("You win!");
        $("#wins-column").text(wins++); //kind of works but deletes the text?      
        reset();
    }
    if (counter > guessNumber) {
        losses++;
        alert("You Lose!")
        $("#losses-column").text(losses); //kind of works but deletes the text?
        reset();
    }
});


//game only registers loss after second click?????


