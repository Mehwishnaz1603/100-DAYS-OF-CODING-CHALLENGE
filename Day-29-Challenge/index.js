//🚀 Day 29 Challenge: Start Coding! 🚀//
//Question 85: Finding the Position of a Substring: Write a function that locates the first
//occurrence of the word "code" within any given string and returns its position.
function findPositionOfCode(str) {
    return str.indexOf("code");
}
;
console.log(findPositionOfCode("The quick brown fox jumps over the lazy dog"));
//Question 86: Checking for Text Presence: Create a function that checks if the word "JavaScript"
//is present in a given string. It should return true if found, otherwise false.
function presenceOfJavaScript(str) {
    return str.includes("JavaScript");
}
; //Checks for "JavaScript" and returns true or false
console.log(presenceOfJavaScript("I learn coding in JavaScript!")); // Example: Seeing if a text mentions JavaScript
//Question 87: Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.
function extractFirstTenChr(str) {
    return str.substring(0, 10);
}
; // Gets characters from start to position 10
console.log(extractFirstTenChr("My name is MehwishNaz")); //Taking the first 10 characters of a sentence
