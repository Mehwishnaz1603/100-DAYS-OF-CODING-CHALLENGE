               //🚀 Day 20 Challenge: Start Coding! 🚀//
//Question 58: Average Score Calculator: Write a simple program that can take lots of 
//scores and find their average.

function averageScore(...scores: number[]): number {
    // Adds all scores together and divides by the number of scores
    let total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}
// Example: finding the average of four scores
console.log(averageScore(69, 80, 70, 100)); // Shows the average score

//Question 59: Add a Special Number: Make a program that creates custom adders. These 
//adders can add a specific number to any other number you give them later.
function makeProgram(valueToAdd: number): (number) => number {
    return function(number: number): number {
        return number + valueToAdd; };
}
let addFive = makeProgram(10);
console.log(addFive(20));

//Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user 
//that can tell you the user's name and age.

let userProfile = (function() {     // The user's details are kept inside// This profile sets itself up and can share info about the user
    let name = "Mehwish";
    let age = 25;
    return {
        displayInfo: function() {
            console.log(`Name: ${name}, Age: ${age}`);}
    };
})();
// Asking the profile to tell us about the user
userProfile.displayInfo(); // It says the user's name and age


