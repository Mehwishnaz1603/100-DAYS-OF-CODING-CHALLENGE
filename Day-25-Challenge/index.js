//🚀 Day 25 Challenge: Start Coding! 🚀//
//Question 73: Assigning and Updating Variables: Create a function where you declare a
//variable using let and assign an initial value. Then, update its value within the same
//function and log both the initial and updated values.
function updateVariable() {
    var number = 100; // Initially assigns the value 100
    console.log("Initial value:", number); // Logs the initial value
    number = 200; // Updates the value to 200
    console.log("Updated value:", number); // Logs the updated value
}
updateVariable();
//Question 74: Swapping Variables: Demonstrate how to swap the values of two variables. Start 
//with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.
function swapVariables() {
    var a = 5, b = 10; // Initially, a is 5 and b is 10
    console.log("Before swap: a =", a, "b =", b);
    var temp = a; // Temporarily stores the value of a
    a = b; // Sets a to b's value
    b = temp; // Sets b to a's original value stored in temp
    console.log("After swap: a =", a, "b =", b); // Logs the swapped values
}
swapVariables();
//Question 75: Compound Assignment Operators: Use compound assignment operators to simplify 
//arithmetic operations. Start with x = 4 and perform a series of operations (addition, 
//subtraction, multiplication, division) on x using compound operators.
function CompoundOperators() {
    var x = 4; // Starts with x equal to 4
    console.log("Initial x:", x);
    x += 2; // Adds 2 to x
    console.log("After addition:", x);
    x -= 1; // Subtracts 1 from x
    console.log("After subtraction:", x);
    x *= 3; // Multiplies x by 3
    console.log("After multiplication:", x);
    x /= 2; // Divides x by 2
    console.log("After division:", x);
}
CompoundOperators();
