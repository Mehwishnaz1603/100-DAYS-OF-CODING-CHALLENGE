           //🚀 Day 22 Challenge: Start Coding! 🚀////
//Question 64: Combine Strings and Numbers: Write a function that merges a piece of text with
// a number. For example, if provided with "Age: " and 30, it should give back "Age: 30".

function combineStringAndNumbers(text: string, number: number): string {
    return text + number; } // Joins the text and number into a single text
console.log(combineStringAndNumbers("Age: ", 30)); // Shows "Age: 30"

//Question 65: Determine the Remainder: Make a function that gets two numbers and shows the
//leftover from dividing them using the % sign. For example, remainder(5, 2) should give 1.

function remainder(num1: number, num2: number): number {
    return num1 % num2; }  // Trying it with 5 divided by 2
console.log(remainder(5, 2)); // Shows 1

//Question 66: Logical AND Verification: Create a function that checks two boolean (true or false
// values. It should only say true if both are true, using the && operator. For instance, 
//checkBothTrue(true, false) should be false.

function checkBothTrue(value1: boolean, value2: boolean): boolean {
    return value1 && value2; }    // Only says true if both val1 and val2 are true
// Trying it with true and false
console.log(checkBothTrue(true, false)); // Shows false


