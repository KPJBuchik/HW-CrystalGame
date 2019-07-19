$(document).ready(function(){
    let guessNumber = Math.floor(Math.random() * 200+100);
    console.log(guessNumber);
    $("#objective").html.guessNumber});
//global variables



//generates value of random number

//generate values for crystals.  does it generate onclick or preload?
var diamondOne =Math.floor(Math.random() * 100+1);
console.log(diamondOne);
var diamondTwo =Math.floor(Math.random() * 100+1);
console.log(diamondTwo);
var diamondThree=Math.floor(Math.random()* 100+1);
console.log(diamondThree);

var wins = 0;
var losses = 0;
var totalScore = 0;

//resets value on win or loss
var reset = function(){
    diamondOne= Math.floor(Math.random() * 100+1);
    diamondTwo= Math.floor(Math.random() * 100+1);
    diamondThree= Math.floor(Math.random() * 100+1);
    guessNumber= Math.floor(Math.random() * 200+1)
    totalScore = 0;
}

//

//creates on click function for each button adds to totalscore 


//add diamond buttons together

//if diamond button presses === guessNumber 
//win++ 
//reset()


//if diamond button presses > guessNumber
//losses++
//reset()





