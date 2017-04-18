//WRITE A PROGRAM THAT WILL TAKE A AMOUNT AND CONVERT IT TO APPROPRIATE STRING REPRESENTATION

//REQUIRE NPM MODULE
const numToString = require('number-string-representation');
// FIRST SOLUTION NODE MODULE
let amount = 100.00;
const output = numToString(amount);
console.log('The first number: %s', output);

//SECOND SOLUTION VANILLA JS NO LIBRARY
let amountTwo = 100.00;
amountTwo.toString();
console.log('The second number: %s', amountTwo);
