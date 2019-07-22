
//displays random number goal 
$(document).ready(function () {
    console.log(guessNumber);
    $("#objective").text(guessNumber);

})


//generates random number
var guessNumber = Math.floor(Math.random() * 200 + 100);
//global variables
var counter = 0;
let diamondButton1 = Math.floor(Math.random() * 100);

let diamondButton2 = 2;
let diamondButton3 = 1;
let diamondButton4 = Math.floor(Math.random() * 100);
var diamondButton5 = Math.floor(Math.random() * 100);
var diamondButton6 = Math.floor(Math.random() * 100);
var diamondButton7 = Math.floor(Math.random() * 100);

var wins = 0;
var losses = 0;


//this for loop does nothing but 
//this is inelegant right? 
for (var i = 0; i < 1; i++) {
    var diamonds = $("<p>");
    diamonds.addClass("diamond-button diamond-button1")
    diamonds.attr("A")//
    diamonds.attr("data-diamondvalue", diamondButton1);
    $("#crystals").append(diamonds)

    var diamonds = $("<p>");
    diamonds.addClass("diamond-button diamond-button2");
    diamonds.attr("B");
    diamonds.attr("data-diamondvalue", diamondButton2);
    $("#crystals").append(diamonds);

    var diamonds = $("<p>");
    diamonds.addClass("diamond-button diamond-button3");
    diamonds.attr("C");
    diamonds.attr("data-diamondvalue", diamondButton3);
    $("#crystals").append(diamonds);

    var diamonds = $("<p>");
    diamonds.addClass("diamond-button diamond-button4");
    diamonds.attr("D");
    diamonds.attr("data-diamondvalue", diamondButton4);
    $("#crystals").append(diamonds);

    var diamonds = $("<p>");
    diamonds.addClass("diamond-button diamond-button5");
    diamonds.attr("D");
    diamonds.attr("data-diamondvalue", diamondButton5);
    $("#crystals").append(diamonds);

    var diamonds = $("<p>");
    diamonds.addClass("diamond-button diamond-button6");
    diamonds.attr("D");
    diamonds.attr("data-diamondvalue", diamondButton6);
    $("#crystals").append(diamonds);

    var diamonds = $("<p>");
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



/*
    $(".diamond-button1").onkeydown(function(e) {
        switch (e.which){
        case 40:
        var audio = new Audio('assets/piano-a.wav');
        audio.play();
        };
    });

*/
    


   reset = function () {
    counter = 0;
    diamondButton1 = Math.floor(Math.random() * 100);
    console.log(diamondButton1)
    diamondButton4 = Math.floor(Math.random() * 100);
    diamondButton5 = Math.floor(Math.random() * 100);
    diamondButton6 = Math.floor(Math.random() * 100);
    diamondButton7 = Math.floor(Math.random() * 100);
    guessNumber = Math.floor(Math.random() * 200 + 100);
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

}
//RESET

