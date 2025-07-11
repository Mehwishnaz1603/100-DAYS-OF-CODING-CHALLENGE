//🚀 Day 23 Challenge: Start Coding! 🚀//
//Question 67: Arithmetic with Mixed Types: Write a function that takes two parameters: a number
// and a string that represents a number (e.g., "5"). Return their sum as a number. 
function addNumberAndString(number1, number2String) {
    return number1 + Number(number2String);
} //Converts the string to a number and adds it to the first number
// Trying it with 15  and "5"
console.log(addNumberAndString(15, "5"));
//Question 68: Multiplying Decimals: Create a function that accepts two decimal numbers and returns
//their product. Round the result to two decimal places.
function multiplyDecimals(num1, num2) {
    return Math.round((num1 * num2) * 100) / 100;
} // Multiplies numbers and rounds result to two decimal places
// Trying it with 0.1 and 0.2
console.log(multiplyDecimals(0.1, 0.2)); // 
//Question 69: Dividing and Finding the Remainder: Write a function that divides two numbers and
// returns both the quotient and the remainder. Use an object to return both values.
function divideAndRemainder(dividend, divisor) {
    var quotient = Math.floor(dividend / divisor); // Calculates the quotient and remainder
    var remainder = dividend % divisor;
    // Returns both in an object
    return { quotient: quotient, remainder: remainder };
}
// Trying it with 8 divided by 3
console.log(divideAndRemainder(8, 3)); // Shows { quotient: 3, remainder: 1 }
