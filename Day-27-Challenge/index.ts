             ////🚀 Day 27 Challenge: Start Coding! 🚀
//Question 79: Creating and Accessing Object Properties: Construct an object representing a car with
//properties for make, model, and year. Then, show how you can access the model property of the car.
let car = {make: "Honda", model: "Honda City 1.2LS", year: 2023};
console.log(car.model);  // Accessing and showing the car's model

//Question 80: Updating Object Properties: Add a property named color to the existing car object, and
//then update the year property to 2021. Show how to perform these operations.
let car1 = {make: "Toyota", model: "Corolla", year: 20220, color:"White"};
// Adding  new property 'color' and updating 'year'
car1.color= "black"; // Adds a new property 'color'
car1.year = 2021; // Updates the 'year' property
console.log(car1); 

//Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument 
//and logs all of its properties and values.
function make_obj (obj : object) {
    for(let property in obj) {
        console.log(`${property} : ${obj[property]}`) }
}
make_obj({ model : "Lx570",  company : "Lexus", year : 2021, color : "Blue"})                
