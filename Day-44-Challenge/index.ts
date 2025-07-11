             // 🚀 Day 44 Challenge: Start Coding! 🚀 //
//Question 130: Explain how to export a function from one JavaScript file and import it into another file.

export const add = (a: number, b: number): number => a + b; // In file: index.ts
// import { add } from "./main.ts";    // In another file where you want to use the add function: Additional see main.ts file
// console.log(add(2, 2)); 

//Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.

// In file: index.ts
export class Person {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    greet() {
      console.log(`Hello, my name is ${this.name}`)}
  }
//   // In another file:
// import { Person } from "./index";
// const personName = new Person("MehwishNaz");
// personName.greet(); 



