//WRITE A PROGRAM THAT WILL TAKE A AMOUNT AND CONVERT IT TO APPROPRIATE STRING REPRESENTATION
const numToString = require('number-string-representation');
// FIRST SOLUTION NODE LIBRARY
let amount = 100.00;
const output = numToString(amount);
console.log('The first number: %s', output);

//SECOND SOLUTION VANILLA JS NO LIBRARY THIS TIME :)
let tens = [
  'Twenty',
  'Thirty',
  'Forty',
  'Fifty',
  'Sixty',
  'Seventy',
  'Eighty',
  'Ninety'
];

let ones = [
  'Zero',
  'One',
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine',
  'Ten',
  'Eleven',
  'Twelve',
  'Thirteen',
  'Fourteen',
  'Fifteen',
  'Sixteen',
  'Seventeen',
  'Eighteen',
  'Nineteen'
];

function ConvertToHundreds(num) { //Passing 105 as arguement when calling function later...
  let changeNum,
    newNum;
  let words = '';
  num %= 1000;
  // console.log('Before conditional the number is', num);
  if (num > 99) {
    //HUNDREDS
    changeNum = String(num); //This converts the number into a string which will be '105'
    newNum = Number(changeNum.charAt(0)); // Use charAt method to return the 1st number in the string which will be 1
    words += ones[newNum] + ' Hundred'; // Words gets assigned to 'One Hundred' acessing the ones array and concatenating the element in the array to Hundred
    // console.log('The number before the divison', num);
    num %= 100;
    // console.log('Number after diving by 100', num);
    if (num > 0) { // if remainder is greater than 0 which it will be because the number is 5
      words += ' and '; // This reassigns words to 'One Hundred and '
    }
  }
  //CHECK TO SEE IF NUMBER IS GREATER THAN 19
  if (num > 19) {
    //TENS
    changeNum = String(num);
    newNum = Number(changeNum.charAt(0));
    words += tens[newNum - 2];
    num %= 10;
    console.log('Number after diving by 10', num);
    if (num > 0) {
      words += '-';
    }
  }
  //CHECK TO SEE IF NUMBER IS GREATER THAN 0
  if (num > 0) {
    //ONES AND TEENS
    newNum = Math.floor(num); //Give me back the the specified number
    words += ones[newNum]; //Words will concatenate 'Five' from the ones array to the value already assigned to the variable 'One Hundred and '
  }
  return words;
}

function ConvertToThousands(num) {
  let units = ['Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion'];
  let words = '';
  let numLeft = Math.floor(num);
  // console.log('This is the number that is left', numLeft);
  for (let i = 0; numLeft > 0; i++) {
    if (numLeft % 1000 > 0) {
      // console.log('After for loop', numLeft);
      if (i != 0) {
        words = ConvertToHundreds(numLeft) + ' ' + units[i - 1] + ' ' + words;
      } else {
        words = ConvertToHundreds(numLeft) + ' ' + words;
      }
    }
    numLeft = Math.floor(numLeft / 1000);
    // console.log('What is numberLeft', numLeft);
  }
  num = Math.round(num * 100) % 100;
  // console.log('What is the number', num);
  if (num > 0) {
    words += ConvertToHundreds(num);
  } else {
    return words;
  }
}

console.log('The second number is: %s', ConvertToHundreds(105)); // This will log 'One Hundred and Five' to the console
console.log('The third number is: %s', ConvertToThousands(12505)); // This will log 'One Thousand and Two Hundred' to the console
