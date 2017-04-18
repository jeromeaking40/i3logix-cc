//REQUIRE NPM MODULE
const numToString = require('number-string-representation');
// FIRST SOLUTION NODE MODULE
let addANumber = 100.00;
const output = numToString(addANumber);
console.log('The first number: %s', output);

//SECOND SOLUTION VANILLA JS NO LIBRARY
let addANumberTwo = 100.00;
addANumberTwo.toString();
console.log('The second number: %s', addANumberTwo);
