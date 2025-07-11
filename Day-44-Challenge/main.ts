             // 🚀 Day 44 Challenge: Start Coding! 🚀 //
//Question 130: Explain how to export a function from one JavaScript file and import it into another file.

// In another file where you want to use the add function:
import { add } from "./index.ts";

console.log(add(2, 2)); 
// Demonstrates importing the add function from mathFunctions.ts and using it.

//Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.

// In another file:
import { Person } from "./index";

const personName = new Person("MehwishNaz");
personName.greet(); 

