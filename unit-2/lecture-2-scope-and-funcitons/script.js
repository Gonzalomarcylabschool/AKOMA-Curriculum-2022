//how to write a function:
/*
function functionName(){
    //code to run;
}

let functionName = function(){
    
}

*/

// example
function print(){
    console.log("test");
}

print();

function printText(text){
    console.log(text);
}
//example of code with no function

let haveFoodMonday = "true";
let haveFoodTuesday = "false";
let haveFoodWenesday = "true";
let timesMoneySaved = 0;

if (haveFoodMonday === "true") {
    console.log("yay you saved money");
    timesMoneySaved++;
}
else {
    console.log("yay you spent money");
}

if (haveFoodTuesday === "true") {
    console.log("yay you saved money");
    timesMoneySaved++;
}
else {
    console.log("yay you saved money");
}

if (haveFoodWenesday === "true") {
    console.log("yay you saved money");
    timesMoneySaved++;
}
else {
    console.log("yay you saved money");
}

console.log(timesMoneySaved)

// example of code with function


let haveFoodMonday = "true";
let haveFoodTuesday = "false";
let haveFoodWenesday = "true";
let timesMoneySaved = 0;

buyFood(haveFoodMonday);
buyFood(haveFoodTuesday);
buyFood(haveFoodWenesday);

function buyFood(haveFood){
    if (haveFood === "true") {
    console.log("yay you saved money");
    timesMoneySaved++;
    }
    else {
        console.log("yay you saved money");
    }
    return timesMoneySaved
}
