
//global variables
$(document).ready(function () {
    console.log(guessNumber);
    $("#objective").text(guessNumber);})

 var guessNumber = Math.floor(Math.random() * 200 + 100);

var counter = 0



let diamonds = [10, 5, 3]

for (var i = 0; i < diamonds.length; i++){

var diamondButton = $("<img>");
diamondButton.addClass("diamond-button");

diamondButton.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");


diamondButton.attr("data-diamondvalue", diamonds[i]);
$("#crystals").append(diamondButton);

}

$(".diamond-button").on("click",function(){

    var crystalValue = ($(this).attr("data-diamondvalue"));
    crystalValue = parseInt(crystalValue)
    counter += crystalValue;
    console.log(crystalValue);
    console.log(counter);
    if (counter === guessNumber) {
        alert("You win!");
    }
    else if (counter >= guessNumber) {
        alert("You lose!!");
    }
});










