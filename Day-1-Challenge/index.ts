//🚀 Day 1 Challenge: Start Coding! 🚀
//Question 1: Install Node.js, TypeScript and VS Code on your computer/Laptop.
//For Checking Create Hellow world Project:
console.log("Hello World!");
//Question 2: Personal Message: Store a person’s name in a variable and print a message
//to them, like “Hello Asharib, would you like to learn some TypeScript today?”
var personsName = "Eric,";
console.log("Hello ".concat(personsName, " Would you like to learn some Python today?"));
//Question 3: Name Cases: Store a person’s name in a variable, and then print that
//person’s name in lowercase, uppercase, and titlecase.
var person_Name = "Mehwish Naz";
// in lowercase
console.log("lowercase:", person_Name.toLowerCase());
//in upper case
console.log("uppercase:", person_Name.toLocaleUpperCase());
//in title case
console.log("titlecase:", person_Name.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
