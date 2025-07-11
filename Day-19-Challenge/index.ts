                //🚀 Day 19 Challenge: Start Coding! 🚀//
//Question 55: Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new 
let numbers = [1, 2, 3, 4];    // list of numbers
let doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8]

//Question 56: Keep Only Strings: Given a mix of different types of items, make a new list has only the words.
let mixedArray = [1, "apple", 2, "banana", true, "carrot"];
// Picks out only the words
let stringsArray = mixedArray.filter(item => typeof item === "string");
// Shows the list of just words
console.log(stringsArray); // Output: ["apple", "banana", "carrot"]

//Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.
// A list of grades
let grades = [88, 94, 72, 99, 53, 77];
// Calculates the average grade
let averageGrade = grades.reduce((total, grade) => total + grade, 0) / grades.length;
// Shows the average grade
console.log(averageGrade);


