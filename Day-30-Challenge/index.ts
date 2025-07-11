            //🚀 Day 30 Challenge: Start Coding! 🚀//
//Question 88: Rounding to the Nearest Integer: Write a function that takes a decimal number
// as input and returns the number rounded to the nearest integer.

function roundNearestInteger(num: number): number {
    return Math.round(num)}; // Rounds the number
// For Rounding a decimal put value in decimal
console.log(roundNearestInteger(2.6)); // For Rounding a decimal put value in decimal
 
//Question 89: Converting Strings to Numbers: Create a function that takes a string representing 
//a number (like "123") and converts it into an actual number type.
function convertStrToNum( str:string): number{
    return parseFloat(str)}; // For Converting the string into a number
    console.log(convertStrToNum("123.45")); 

//Question 90: Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN 
//(Not a Number) and return a boolean result.

function nanValue(value: any): boolean {
    return isNaN(value)}; // Checks and returns true if the value is NaN, false otherwise
// Examples: Checking different values
console.log(isNaN("My Name Is MehwishNaz")); // Outputs: true, because "output" isn't a number
console.log(isNaN(100)); // Outputs: false, because 123 is a number
