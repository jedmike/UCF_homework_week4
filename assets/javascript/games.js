
// Global Variables
// ____________________________________________________________________
                                                                        //Crystal Tracking-got this from solution video would have done seperatly
//set up crystals as a object

        var crystal = {
                purple: {
                    value: 0
                },
                red: {
                    value: 0
                },
                blue: {
                    value: 0
                },
                green: {
                    value: 0
                },
            };

//set up score game variables

        var wins = 0;
        var losses = 0;
        your_score = 0;
        your_target = 0;

// ____________________________________________________________________
// ____________________________________________________________________

// Functions
// ____________________________________________________________________
        var startG = function () {
        // reset target score
        your_target = randomNum(19, 120);
        //adjust html
        $("#targets").html(your_target);
        // your_score = 0;
        // $("#yours").html(your_score);
        your_score = 0;
       

// reset your score
//reset crystal values
// //  Set Crystal valuses:Random numbers between 1-12

        crystal.purple.value = randomNum(1, 12);
        //set for red
        crystal.red.value = randomNum(1, 12);
        //set for blue
        crystal.blue.value = randomNum(1, 12);
        //set for green
        crystal.green.value = randomNum(1, 12);
        }

//Fetch random number between any "two values" function
//Set Target score:Random number between 19-120
                                                                        // Thank you Stack Overflow
        var randomNum = function (lowRange, hiRange) {
            return Math.floor(Math.random() * (hiRange - lowRange + 1) + lowRange);
        };


        var crysVal = function (crystal) {
            your_score = your_score + crystal.value;
            resultCk();
        };

// //check actual gainst target, if equal win++ "you Win"

        var resultCk = function () {
            if (your_score === your_target) {
                alert("You Won");
                wins++;
                startG ()
            }

//check if > target, if true, loses ++ "you loose"

        else if (your_score > your_target) {
            alert("You Lose");
            losses++;
            startG ()
        };
    
    //adjust html       

        $("#yours").html(your_score);
        $("#winS").html(wins);
        $("#lossesS").html(losses);

}

// ____________________________________________________________________
// Process logic
// ______________________________________________________________________
// Player clcks a crystal, 
// Click event logic for crystals
// Update crystal object with crystal value function   


//startGame()

        startG();

        $("#purple").click(function () {
            crysVal(crystal.purple);
        });

        $("#red").click(function () {
            crysVal(crystal.red);
        });
        $("#blue").click(function () {
            crysVal(crystal.blue);
        });
        $("#green").click(function () {
            crysVal(crystal.green);
        });











