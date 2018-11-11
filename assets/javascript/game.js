$(document).ready(function () { //wait until page is loaded completely

    // Global variables needed
    //wins, loses, goalNumber, userScore
    var wins = 0;
    var loses = 0;
    var goalNumber = Math.floor(Math.random() * 120) + 1;
    var collectedValue = 0;

    //functions:
    //set goalNumber
    function setGoal(){
        $("#goal").text(goalNumber);

    } 
    setGoal();

    //with Math.random 1-120


    //set crystal values 1-12
    //- every image, creat img on screen
    function addCrystals() {

        console.log("addCrystals called")

        var images = ["assets/images/bluegem.jpg", "assets/images/greengem.jpg", "assets/images/orangegem.jpg", "assets/images/redgem.jpg"]

        //for loop 
        for (var i = 0; i < images.length; i++) {
            var div = $("<img>");
            div.addClass("crystal");
            div.attr("src", images[i])
            div.attr('crystalVal', Math.floor(Math.random() * 12) + 1);
            $(".crystal-div").append(div);

        }

        //     //attach attr src
        //     //attach class
        //     //add crystal value as attr
        //     //append


    }

    function changeCrystalVal() {
        $(Math.floor(Math.random() * 12) + 1).attr('crystalVal')

    }
    //update collectedValue - maybe write a display collected value function
    function wonGame(){
        //display to screen that user won!
        console.log("wonGame called")
        wins++;
        resetGame();


        //call resetGame();
    }
    function keepPlaying(){
        //display new collectedValue
        $("#collected").text(collectedValue);
        console.log("KeepPlaying called")

    }
    function lostGame(){
        //display that user lost
        //call resetGame();
        console.log("lostGame called")
        loses++;
        resetGame();
    }
    function resetGame(){
        console.log("resetGame called");
        //clear wins and loses
        wins = 0;
        loses = 0;
        //new goalNumber
        goalNumber = Math.floor(Math.random() * 120) + 1;

        //reset crystalVal
        changeCrystalVal();
    }


    //function to see current value, and goal number 

$(document).on("click", ".crystal", function(){ //attach event lister to the doc, once the page has loaded
        // console.log(this);
        console.log($(this).attr("crystalVal"));
        //total value
        collectedValue += parseInt($(this).attr("crystalVal"));
        console.log(collectedValue);
        //display on screen
        //check if win or loss 
        if (collectedValue === goalNumber) {
            wonGame();
        }
        else if (collectedValue < goalNumber) {
            //keep playing
            keepPlaying();
        }
        else {
            //went over, you lose
            lostGame();
        }
      

    });

    //  call function to addCrystals();
    addCrystals();
    console.log(wins);
    console.log(loses);
    console.log(goalNumber);


})



//create click event on crystals
//use $(this) to capture value attribute
//add clicked value to userScore
//create conditions to check for win or loss using if statement 
//if win or loss 
//restart game and 
//increment wins or loss





























//practice looping divs











// function makeDiv() {
//     var array = [a, 2, 3, 4]
//     for (var i = 0; i < array.length; i++) {
//         var div = $("<div>");
//         div.addClass("crystal");
//         div.attr("crystalval", Math.random.etc)
//         $(".divContainer").append(div);
//     }


// }
// makeDiv();



