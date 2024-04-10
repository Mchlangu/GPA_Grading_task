//Program to calculate positive numbers only, skip negative numbers.

const prompt = require('prompt-sync')();


let sum = 0;
let num = 0;

while(num >= 0){

    sum = sum + num;
    num = parseInt(prompt("Enter any positive number from zero: "));
    if(isNaN(num))
    {
        console.log("Please enter a valid number - not letters or symbols allowed");
        num = 0;
        continue
    }

}

console.log(sum);