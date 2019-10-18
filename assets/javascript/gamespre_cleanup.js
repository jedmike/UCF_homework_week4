
// Global Variables
// ____________________________________________________________________

//Crystal Tracking-got this from solution video would have done seperatly
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
    // reset your score
    //reset crystal values
    crystal.purple.value = randomNum(1, 12);
    //set for red
    crystal.red.value = randomNum(1, 12);
    //set for blue
    crystal.blue.value = randomNum(1, 12);
    //set for green
    crystal.green.value = randomNum(1, 12);
}
//Fetch random number between any "two values" function
// Thank you Stack Overflow
var randomNum = function (lowRange, hiRange) {
    return Math.floor(Math.random() * (hiRange - lowRange + 1) + lowRange);
};
// //var startGame = function (){

// // Score = 
// //  Set Target score:Random number between 19-120
// your_target = randomNum(19, 120);
// //adjust html
// $("#targets").html(your_target);



// //add selected Crystal value to previous value
// //check actual gainst target, if equal win++ "you Win"
// //  Set Crystal valuses:Random numbers between 1-12
// //set for purple
// crystal.purple.value = randomNum(1, 12);
// //set for red
// crystal.red.value = randomNum(1, 12);
// //set for blue
// crystal.blue.value = randomNum(1, 12);
// //set for green
// crystal.green.value = randomNum(1, 12);

// //DBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBB
// console.log("*******************************************************")
// console.log("purple=" + crystal.purple.value,
//     "red=" + crystal.red.value,
//     "blue=" + crystal.blue.value,
//     "green=" + crystal.green.value);
// console.log("*******************************************************")
// //DBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBB

var crysVal = function (crystal) {
    your_score = your_score + crystal.value;
    resultCk();
};

var resultCk = function () {
    if (your_score === your_target) {
        alert("You Won");
        //DBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBB
        console.log("^^^^^^^^^^^^^^^^^^^^")
        console.log("You Win");
        console.log("^^^^^^^^^^^^^^^^^^^^")
        //DBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBB
        wins++;
        startG();
    }
    //check if > target, if true, loses ++ "you loose"
    else if (your_score > your_target) {
        alert("You Lose");//DBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBB
        console.log("^^^^^^^^^^^^^^^^^^^^")
        console.log("You Lose");
        console.log("^^^^^^^^^^^^^^^^^^^^")
        //DBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBB
        losses++;
        startG();
    };
    //DBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBB
    console.log("############################")
    console.log("your Score:" + your_score);
    console.log("Wins:" + wins, "Losses:" + losses);
    console.log("############################")
    //DBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBB
    //adjust html       
    $("#yours").html(your_score);
    $("#winS").html(wins);
    $("#lossesS").html(losses);

    //         }


    //DBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBB
    console.log("++++++++++++++++++++++")
    console.log("your Target:" + your_target);
    console.log("++++++++++++++++++++++")
    //DBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBDBB
}





// _____________________________________________________________________
// ____________________________________________________________________

// Process logic
// ______________________________________________________________________


startG();


//  Player clcks a crystal, 
// Click event logic for crystals
// Update crystal object with crystal value function   
//startGame()

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











