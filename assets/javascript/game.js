$(document).ready(function () { //wait until page is loaded completely

    // Global variables needed
    //wins, loses, goalNumber, userScore
    var wins = 0;
    var loses = 0;
    var goalNumber = Math.floor(Math.random() * 120) + 1;;
    var collectedValue = 0;

    //functions:
    //set goalNumber
    function setGoal(){
        goalNumber = Math.floor(Math.random() * 120) + 1;
        $("#goal").text(goalNumber);
    } 

    setGoal();
 
    //set crystal values 1-12
    //- every image, creat img on screen
    function addCrystals() {

        console.log("addCrystals called")

        var images = ["assets/images/blue.png", "assets/images/purple.png", "assets/images/yellow.png", "assets/images/sapphire.png"]

        //for loop to append images and add random value
        for (var i = 0; i < images.length; i++) {
            var div = $("<img>");
            div.addClass("crystal");
            div.attr("src", images[i])
            div.attr('crystalVal', Math.floor(Math.random() * 12) + 1);
            $(".crystal-div").append(div);

        }
    }

    //update collectedValue - maybe write a display collected value function
    function wonGame(){
        //display to screen that user won!
        wins++;
        console.log("wonGame called")
        resetGame();
        
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
        $("#wins-text").text(wins);
        console.log(wins);
        $("#loss-text").text(loses);
        console.log(loses);
        collectedValue = 0;
        $("#collected").text(collectedValue);

        //new goalNumber
        setGoal();
        
        //reset crystalVal
        $(".crystal-div img:last-child").remove();
        $(".crystal-div img:last-child").remove();
        $(".crystal-div img:last-child").remove();
        $(".crystal-div img:last-child").remove();
        
        addCrystals();  
    }

    //function to see current value of crystals and collect the crystals
   
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

});

