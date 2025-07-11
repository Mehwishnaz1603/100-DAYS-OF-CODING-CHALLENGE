//🚀 Day 32 Challenge: Start Coding! 🚀//
//Question 94: Use the .map() method to create a new array that contains the length of each
// word from an array of words.
// create array with some words
var words = ["Hello", "My", "Name", "Is", "MehwishNaz"];
var lengths = words.map(function (word) { return word.length; }); // Uses .map() to create a new array with the length of each word
console.log(lengths); // In output counts the words length
//Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.
function filterGreaterThan10(numbers) {
    return numbers.filter(function (number) { return number > 10; });
}
var number = [2, 5, 10, 15, 18, 20, 25];
console.log(filterGreaterThan10(number)); // They show output all greathen than 10
//Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
function calculateSumOfNumbers(numbers) {
    return numbers.reduce(function (accumulator, current) { return accumulator + current; }, 0);
}
// Example: Calculating the sum of an array of numbers
var numbers = [1, 2, 3, 4, 5.6, 7, 8, 9, 10];
console.log(calculateSumOfNumbers(numbers));
