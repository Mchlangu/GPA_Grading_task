const prompt = require('prompt-sync')();

var op = "";

function getSum(x, y){
    return x + y;
}

function getDifference(x, y){
    return x - y;
}

function getProduct(x, y){
    return x * y;
}

function getQuotient(x, y){
    return x / y;
}


a = parseFloat(prompt("Enter a number: "));
b = parseFloat(prompt("Enter another number: "));
op = prompt('Enter operator (either  +, -, *, or /) : ');
 
switch (op) {
    case "+":
        console.log(getSum(a, b));
        break;
    case "-":
        console.log(getDifference(a, b));
        break;
    case "*":
        console.log(getProduct(a, b));
        break;
    case "/":
        console.log(getQuotient(a, b));
        break;
    default:
        console.log("Bye");
}