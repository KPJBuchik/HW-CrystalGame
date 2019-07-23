//prints the guess number on the DOM


$(document).ready(function () {
    console.log(guessNumber);
    $("#objective").text(guessNumber);
    alert("Reach the number at the top of the page by clicking the letters, your wins and losses are displayed in the column below, each letter plays a sound of the corresponding note")
    

})
var wins = 0;
var losses = 0;
//generates number to guess
var guessNumber = Math.floor(Math.random() * 200 + 100);
var counter = 0;
//an array that populates the buttons 
diamondButton = [
    {
        text: "A",
        sound: 'assets/audio/piano-a.wav'
    },
    {
        text: "B",
        sound: 'assets/audio/piano-b.wav'
    },
    {
        text: "C",
        sound: 'assets/audio/piano-c.wav'
    },
    {
        text: "D",
        sound: 'assets/audio/piano-d.wav'
    },
    {
        text: "E",
        sound: 'assets/audio/piano-e.wav'
    },
    {
        text: "F",
        sound: 'assets/audio/piano-f.wav'
    },
    {
        text: "G",
        sound: 'assets/audio/piano-highg.wav',
    }

]




//for each to assign a random number to each button 
diamondButton.forEach(function (populate) {
    var diamonds = $("<p>");
    diamonds.text(populate.text);
    diamonds.addClass("diamond-button");
    diamonds.attr("data-value", Math.floor(Math.random() * 20));
    diamonds.attr("data-sound", populate.sound);
    $("#crystals").append(diamonds);
    



});


//resets the game on a win or loss 
reset = function () {
    $("#crystals").empty();
    diamondButton.forEach(function (populate) {
        var diamonds = $("<p>");
        diamonds.text(populate.text)
        diamonds.addClass("diamond-button")

        diamonds.attr("data-value", Math.floor(Math.random() * 20));
        diamonds.attr("data-sound", populate.sound);

        $("#crystals").append(diamonds);

    });
    counter = 0;
    guessNumber = Math.floor(Math.random() * 200 + 100);
    $("#objective").text(guessNumber);
}
//
$(document).on("click", ".diamond-button", function () {
    var audio = new Audio($(this).attr("data-sound"));
    audio.play();
    var crystalValue = ($(this).attr("data-value"));
    crystalValue = parseInt(crystalValue);
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
        losses++;
        // alert("You Lose!")
        $("#losses-column").text(losses);
        reset();
    }

});



