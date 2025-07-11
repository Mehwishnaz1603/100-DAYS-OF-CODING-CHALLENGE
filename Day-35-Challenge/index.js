//🚀 Day 35 Challenge: Start Coding! 🚀//
//Question 103: Write a function that returns a random boolean value, true or false.
function randomBoolean() {
    return Math.random() > 0.9; // Returns true if the random number is greater than 0.9
}
console.log(randomBoolean()); // Outputs either true or false randomly
//Question 104: Create a function that generates a random hexadecimal color code.
function randomHexdecimalColor() {
    var color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    return color; // Returns the random color code
}
console.log(randomHexdecimalColor()); // Outputs a random hex color code
//Question 105: Simulate a dice roll using JavaScript and return a random integer between 1 and 6.
function diceRoll() {
    return Math.floor(Math.random() * 6) + 1; // Calculates a random integer from 1 to 6
}
console.log(diceRoll()); // Outputs a random number between 1 and 6
