                //🚀 Day 28 Challenge: Start Coding! 🚀//
//Question 82: Find the Length of a String: Write a function that takes a string as an argument
//and returns the number of characters in the string.
 
function lengthOfString(str:string): number
      {return str.length }// Returns the number of characters in the string
console.log(lengthOfString("MehwishNaz"));    // Measuring the length of a name

//Question 83: Converting to Upper and Lower Case: Create a function that takes a string, converts
//it to uppercase, then to lowercase, and logs both.

function convertString(str:string) {
       let upperStr = str.toUpperCase();     // Converts to uppercase
       let lowerStr = str.toLowerCase(); // Converts to lowercase
console.log(`UpperCase:${upperStr} . Lowercase: ${lowerStr}`);}

//Question 84: Replacing Text in a String: Write a function that takes a sentence and replaces all
//instances of the word "JavaScript" with "TypeScript".

function replaceJavaScriptWithTypeScript(sentence: string): string {
return sentence.replace(/JavaScript/g, "TypeScript");}// Uses regular expression with the 'g' flag for a global replacement
// Example: Changing a programming language name in a sentence
console.log(replaceJavaScriptWithTypeScript("I love JavaScript and daily coding in JavaScript"));
