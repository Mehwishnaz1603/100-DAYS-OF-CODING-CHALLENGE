           //🚀 Day 8 Challenge: Start Coding! 🚀//
//Q22: Intentional Error: If you haven’t received an array index error in one of your programs yet,
//try to make one happen. Change an index in one of your programs to produce an index error. 
//Make sure you correct the error before closing the program.

let months: string[] = ["January", "February", "March", "April","May","June",
"July","August","September","October","November","December"]
console.log(months[11]) //Intentional Error
console.log(months[12]) //Correcting the error

//Q23: Conditional Tests: Write a series of conditional tests. Print a statement describing 
//each test and your prediction for the results of each test.
// Your code should look something like this:
//let car = 'subaru';
//console.log("Is car == 'subaru'? I predict True.")
//console.log(car == 'subaru')

let facultyStudent= "Clear the Test"
console.log("If Faculty Student clear the test I predict it is true")
console.log(facultyStudent === "Clear the Test")
console.log("If Faculty Student clear the test I presdict it is false");
console.log(facultyStudent !== "Clear the Test")

//Q24: More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try
// more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array

let car: string = 'subaru';
let numberA: number = 15;
let numberB: number = 10;
let fruits: string[] = ['apple', 'orange', 'banana'];

// Tests for equality and inequality with strings
console.log("Test 1: Is car equal to 'subaru'? I predict True.")
console.log(car === 'subaru')
console.log("Test 2: Is car equal to 'honda'? I predict False.")
console.log(car === 'honda')
// Tests using the lower case function
console.log("Test 3: Is car in lowercase equal to 'subaru'? I predict true.");
console.log(car.toLowerCase() === 'subaru');
console.log("Test 4: Is car in lowercase equal to 'SUBARU'? I predict false.");
console.log(car.toLowerCase() === 'SUBARU');
// Numerical tests
console.log("Test 5: Is numberA greater than numberB? I predict True.");
console.log(numberA > numberB);
console.log("Test 6: Is numberA less than or equal to numberB? I predict False.");
console.log(numberA <= numberB);
// Tests using "and" and "or" operators
console.log("Test 7: Is car equal to 'subaru' and numberA greater than 5? I predict True.");
console.log(car === 'subaru' && numberA > 5);
console.log("Test 8: Is car equal to 'subaru' or numberB greater than 10? I predict False.");
console.log(car !== 'subaru' || numberB > 10);
// Test whether an item is in an array
console.log("Test 9: Is 'apple' in the fruits array? I predict True.");
console.log(fruits.includes('apple'));
// Test whether an item is not in an array
console.log("Test 10: Is 'grape' is in the fruits array? I predict False.");
console.log(fruits.includes('grape'));

