// 🚀 Day 13 Challenge: Start Coding! 🚀//
//Q37: Large Shirts: Modify the make_shirt() function so that shirts are large by default with
//a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a 
//shirt of any size with a different message.
function make_Shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I Love TypeScript"; }
    console.log("Shirt Size: ".concat(size, ", Message: ").concat(message));
}
make_Shirt();
make_Shirt("Medium", "Coding id my Passion");
make_Shirt("Small", "Full Stack Developer");
// Q38: Cities: Write a function called describe_city() that accepts the name of a city and its country. 
//The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter 
//the country a default value. Call your function for three different cities, at least one of which 
//is not in the default country.
function describe_city(city, country) {
    if (city === void 0) { city = "Karachi"; }
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city();
describe_city("Moscow", "Russia");
describe_city("Dehli", "India");
//Q39: City Names: Write a function called city_country() that takes in the name of a city and its country.
//The function should return a string formatted like this:
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    console.log("\"".concat(city, "\", \"").concat(country, "\""));
}
city_country("Islamabad", "Pakistan");
city_country("Delhi", "India");
city_country("Kabul", "Afghanistan");
