             //🚀 Day 21 Challenge: Start Coding! 🚀//
//Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, 
//trucks, and motorcycles using enums, and show one example.

enum Vehicles {Car, Truck, Motorcycle, Suzuki};
// Showing one type of vehicle from the list
console.log(Vehicles.Car); // It shows 0 because enums start counting from 0

//Question 62: Making a Student Template: Create a blueprint for student information, including their
//name, age, and the classes they're taking, and then fill in this blueprint with an example student.

// Creating a blueprint (interface) for student information
interface studentTemplate {name: string; age: number; courses: string[];}

// Filling in the blueprint with an example student

let student: studentTemplate = {
    name: "Mehwishnaz", age: 25, courses: ["Math", "Science", "Computer"] };
console.log(student);
// We're using the blueprint to make sure our student has a name, age, and list of courses.

//Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using
// a special type alias, including properties unique to each shape.

// Creating a custom type (type alias) for shapes that could be circles or rectangles
type Shape = {
    kind: "circle" | "rectangle";
    radius?: number; // Only for circles
    width?: number; // Only for rectangles
    height?: number; // Only for rectangles
};

// Describing a circle using our Shape type
let circle: Shape = {kind: "circle", radius: 5};

// Describing a rectangle using our Shape type
let rectangle: Shape = {kind: "rectangle", width: 10, height: 20};

// Showing what we described
console.log(circle); // Here's the circle
console.log(rectangle); // And here's the rectangle







