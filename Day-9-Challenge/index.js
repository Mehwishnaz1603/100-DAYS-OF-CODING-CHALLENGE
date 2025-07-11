//🚀 Day 9 Challenge: Start Coding! 🚀//
//Q25: Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color
// and assign it a value of 'green', 'yellow', or 'red'.
//• Write an if statement to test whether the alien’s color is green. If it is, print a message that the 
//player just earned 5 points.
//• Write one version of this program that passes the if test and another that fails. 
//(The version that fails will have no output.)
var alien_color = "green";
console.log("The alien has a color: ".concat(alien_color));
// Check if the alien's color is green
if (alien_color === "green") {
    console.log("Player just earned 5 points!");
}
// Check if the alien's color is not green
if (alien_color !== "green") {
    console.log("Player just earned 5 points!");
}
//Q26: Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
//• Write one version of this program that runs the if block and another that runs the else block.
//version with if block
var aliencolor = 'green';
// If-else chain to determine points based on alien's color
if (aliencolor === 'green') {
    console.log("Player just earned 5 points for shooting the green alien!");
}
else {
    console.log("Player just earned 10 points!");
}
//version with else block
if (aliencolor !== 'green') {
    console.log("Player just earned 5 points for shooting the green alien!");
}
else {
    console.log("Player just earned 10 points!");
}
//Q27:Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.
//• If the alien is yellow, print a message that the player earned 10 points.
//• If the alien is red, print a message that the player earned 15 points.
//• Write three versions of this program, making sure each message is printed for the appropriate color alien.
//for a green alien
var alien_Color = "green";
if (alien_Color === "green") {
    console.log("Player earned 5 points for shooting the green alien!");
}
else if (alien_Color === "yellow") {
    console.log("Player earned 10 points for shooting the yellow alien!");
}
else if (alien_Color === "red") {
    console.log("Player earned 15 points for shooting the red alien!");
}
else {
    console.log("Unknown alien color - no points awarded.");
}
// for a yellow alien
var alien_Color2 = "yellow";
if (alien_Color2 === "green") {
    console.log("Player earned 5 points for shooting the green alien!");
}
else if (alien_Color2 === "yellow") {
    console.log("Player earned 10 points for shooting the yellow alien!");
}
else if (alien_Color2 === "red") {
    console.log("Player earned 15 points for shooting the red alien!");
}
else {
    console.log("Unknown alien color - no points awarded.");
}
//Version for a red alien
var alien_Color3 = "red";
if (alien_Color3 === "green") {
    console.log("Player earned 5 points for shooting the green alien!");
}
else if (alien_Color3 === "yellow") {
    console.log("Player earned 10 points for shooting the yellow alien!");
}
else if (alien_Color3 === "red") {
    console.log("Player earned 15 points for shooting the red alien!");
}
else {
    console.log("Unknown alien color - no points awarded.");
}
