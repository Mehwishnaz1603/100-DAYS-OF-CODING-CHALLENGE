                     // 🚀 Day 12 Challenge: Start Coding! 🚀//
 //Q34: Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names 
//in a array, and then use a for loop to print the name of each pizza.
//• Modify your for loop to print a sentence using the name of the pizza instead of printing 
//just the name of the pizza. For each pizza you should have one line of output containing a 
//simple statement like I like pepperoni pizza

let fvt_pizza: string[] = ["peproni","Cheese", "BBQ Chicken", "Sicilian"]
for (let pizzas of fvt_pizza) {
    console.log(`I like ${pizzas} pizza.`)}
    console.log(`I really love Pizzas`)

//Q35: Think of at least three different animals that have a common characteristic. Store the names of these 
//animals in a list, and then use a for loop to print out the name of each animal. 
//• Modify your program to print a statement about each animal, such as A dog would make a great pet. 
//• Add a line at the end of your program stating what these animals have in common. You could print a 
//sentence such as Any of these animals would make a great pet!

let pet_animal: string[] = ["Dog", "Cat", "Lion","Horse","Monkey"]
pet_animal.forEach(pet_animal => {
    console.log(`A ${pet_animal} would make a great pet.`)
})
console.log("But I always prefer cats.")

//Q36: T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message
// that should be printed on the shirt. The function should print a sentence summarizing the 
//size of the shirt and the message printed on it. Call the function.

function make_shirt(size: string, message: string) {
    console.log(`The shirt size should be: ${size}, and must be printed with: ${message}`)
}
make_shirt("Small", "<\My Life My Rules\>")
make_shirt("Medium", "<\I am a Codinggirl\>")
make_shirt("Large", "<\I love codimg\>")


