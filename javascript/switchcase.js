//Simple calculator using JS and Switch case


const prompt = require('prompt-sync')();
 
let results;
const operator = prompt('Enter operator (either  +, -, *, or /) : ');
const firstNum = parseFloat(prompt('Enter the first number: '))
const secNum = parseFloat(prompt('Enter the second number: '));

switch(operator){
    case '+':
        results =firstNum + secNum;
        console.log(`${firstNum} + ${secNum} = ${results}`);
        break;
    case '-':
        results =firstNum - secNum;
        console.log(`${firstNum} - ${secNum} = ${results}`);
        break;
    case '*':
        results =firstNum * secNum;
        console.log(`${firstNum} * ${secNum} = ${results}`);
        break;
    case '/':
        results = firstNum / secNum;
        console.log(`${firstNum} / ${secNum} = ${results}`);
        break;
    case '^':
        results = firstNum ^ secNum;
        console.log(`${firstNum}  ${secNum} = ${results}`);
        
}
       
        