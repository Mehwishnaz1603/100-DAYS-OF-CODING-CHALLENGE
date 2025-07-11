            //🚀 Day 38 Challenge: Start Coding! 🚀//
//Question 112: Create a Map that stores the names of countries as keys and their capitals as values. 
//Add three countries to the Map.
let countriesMap = new Map<string, string>();
countriesMap.set("Afghanistan", "Kabul");  // Adds Afghanistan to the Map
countriesMap.set("Pakistan", "Islamabad"); // Adds Pakistan to the Map
countriesMap.set("Morocco", "Rabat"); // Adds amaorocco to the Map
console.log(countriesMap);

//Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.
function keyLogs (check: Map<string, string>) {
  if (countriesMap.has("canada")) {
console.log(`The capital of Canada is ${countriesMap.get("canada")}`);
} else {
  console.log("Canada is not in the Map.");
}
}
keyLogs(countriesMap);

//Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.

let std = new Map<number, string>()
std.set(1, "Mehwish")
std.set(2, "Eman")
std.set(3, "Anaya")
std.forEach((names, ID) => {
console.log(`Student name: ${names}, Student ID: ${ID}`);
})

