             //🚀 Day 26 Challenge: Start Coding! 🚀//
//Question 76: Function Parameters and Return Values: Create a function that takes two
//numbers as parameters, adds them together, and returns the result. Show how you can call
//this function and log the result.
function addNumbers(num1: number, num2: number): number {
    return num1 + num2; }  // Calculates the sum of num1 and num2
console.log(addNumbers(8, 6)); // Calling the function with two numbers and logging the result

//Question 77: Default Parameters: Write a function that greets a user. It should take the user's
//name as a parameter and say hello. If no name is given, it should greet an anonymous user.
function greetUser(name: string = "noname") {
    console.log(`Hello, ${name}!`)};// Says hello to the given name or to an noname user
greetUser("Mehwishnaz"); // Trying the function with a name and without
greetUser(); // 

//Question 78: Function Expressions vs. Function Declarations: Compare function expressions and 
//declarations by creating one of each that performs the same task, such as squaring a number.
function squareDeclaration(number: number): number {
    return number * number;
}
const squareExpression = function(number: number): number {
    return number * number};
console.log(squareDeclaration(3)); // Using both functions to square the number 4
console.log(squareExpression(3)); 
