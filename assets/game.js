
$(document).ready(function () {
    console.log(guessNumber);
    $("#objective").text(guessNumber);
    alert("Guess the number at the top of the page by pressing the letters.  Your wins and losses are displayed below the target Number.");

})
var guessNumber = Math.floor(Math.random() * 200 + 100);
var counter = 0;
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

var wins = 0;
var losses = 0;


diamondButton.forEach(function (populate) {
    var diamonds = $("<p>");
    diamonds.text(populate.text)
    diamonds.addClass("diamond-button")

    diamonds.attr("data-value", Math.floor(Math.random() * 20));
    diamonds.attr("data-sound", populate.sound);

    $("#crystals").append(diamonds);

});

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



