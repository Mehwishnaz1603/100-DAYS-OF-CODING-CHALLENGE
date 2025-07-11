                 // 🚀 Day 13 Challenge: Start Coding! 🚀//

//Q37: Large Shirts: Modify the make_shirt() function so that shirts are large by default with
//a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a 
//shirt of any size with a different message.

function make_Shirt(size: string = "Large", message: string = "I Love TypeScript"): void {
    console.log(`Shirt Size: ${size}, Message: ${message}`)
    }
    make_Shirt()
    make_Shirt("Medium", "Coding id my Passion")
    make_Shirt("Small", "Full Stack Developer")
    
// Q38: Cities: Write a function called describe_city() that accepts the name of a city and its country. 
//The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter 
//the country a default value. Call your function for three different cities, at least one of which 
//is not in the default country.

function describe_city(city: string = "Karachi", country: string  = "Pakistan"): void {
    console.log(`${city} is in ${country}`)
 }
 describe_city()
 describe_city("Moscow","Russia")
 describe_city("Dehli", "India")

//Q39: City Names: Write a function called city_country() that takes in the name of a city and its country.
//The function should return a string formatted like this:
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.

function city_country(city: string, country: string): void {
    console.log(`"${city}", "${country}"`)
  }
    city_country("Islamabad", "Pakistan")
    city_country("Delhi", "India")
    city_country("Kabul", "Afghanistan")

   
    