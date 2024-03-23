#! /usr/bin/env node

import inquirer from "inquirer";

// 1) Computer will generate a random number
// 2) user input for Guessing number
// 3) Computer user input with Computer generated number and show the result

const randomNumber = Math.floor(Math.random() * 6 +1);
console.log("Well come to Number Guessing Game");
const answares = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "Number",
        message: "Please Guesse a Number between 1-6 ",
        
    },
]);

if(answares.userGuessedNumber === randomNumber){
    console.log("Congragulation You Guess a Right Number");
}else {
    console.log("You Guess Wrong Number")

}


