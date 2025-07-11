                 //🚀 Day 31 Challenge: Start Coding! 🚀//
//Question 91: Create an array of your three favorite fruits and add a new fruit to the end of the array.
let favoriteFruits: string[] = ["Apple", "Mango", "Cherry", "Straberry"];
favoriteFruits.push("Banana"); // Adds "Banana" to the end of the array
console.log(favoriteFruits); 

//Question 92: Write a function to remove the last element from an array and return the removed element.
function removeLastElement<T>(arr: T[]): T | undefined {
    return arr.pop()};  // Removes and returns the last element of the array
// Example: Removing the last fruit from the array
const fruit: string[] = ["Apple", "Banana", "Mango"];
console.log(removeLastElement(fruit));   //'Mango'
console.log(fruit);   //['Apple', 'Banana']

//Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".
// This function finds "Banana" in the fruits array and replaces it with "Mango"
function replaceBananaWithMango(fruits: string[]): void {
    const index = fruits.indexOf("Banana");      // Finds the index of "Banana"
    if (index !== -1) fruits[index] = "Mango";   // Replaces "Banana" with "Mango" if found
}
const fruits: string[] = ["Apple", "Banana", "Cherry"];//Example: Replacing "Banana" in the array
replaceBananaWithMango(fruits);
console.log(fruits); // ['Apple', 'Mango', 'Cherry']


