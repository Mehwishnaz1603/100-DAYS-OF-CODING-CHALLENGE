"use strict";
// 🚀 Day 44 Challenge: Start Coding! 🚀 //
//Question 130: Explain how to export a function from one JavaScript file and import it into another file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = exports.add = void 0;
var add = function (a, b) { return a + b; }; // In file: index.ts
exports.add = add;
// import { add } from "./main.ts";    // In another file where you want to use the add function: Additional see main.ts file
// console.log(add(2, 2)); 
//Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.
// In file: index.ts
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name));
    };
    return Person;
}());
exports.Person = Person;
//   // In another file:
// import { Person } from "./index";
// const personName = new Person("MehwishNaz");
// personName.greet(); 
