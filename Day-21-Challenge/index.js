//🚀 Day 21 Challenge: Start Coding! 🚀//
//Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, 
//trucks, and motorcycles using enums, and show one example.
var Vehicles;
(function (Vehicles) {
    Vehicles[Vehicles["Car"] = 0] = "Car";
    Vehicles[Vehicles["Truck"] = 1] = "Truck";
    Vehicles[Vehicles["Motorcycle"] = 2] = "Motorcycle";
    Vehicles[Vehicles["Suzuki"] = 3] = "Suzuki";
})(Vehicles || (Vehicles = {}));
;
// Showing one type of vehicle from the list
console.log(Vehicles.Car); // It shows 0 because enums start counting from 0
// Filling in the blueprint with an example student
var student = {
    name: "Mehwishnaz", age: 25, courses: ["Math", "Science", "Computer"]
};
console.log(student);
// Describing a circle using our Shape type
var circle = { kind: "circle", radius: 5 };
// Describing a rectangle using our Shape type
var rectangle = { kind: "rectangle", width: 10, height: 20 };
// Showing what we described
console.log(circle); // Here's the circle
console.log(rectangle); // And here's the rectangle
