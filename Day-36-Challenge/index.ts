                 //🚀 Day 36 Challenge: Start Coding! 🚀//

//Question 106: Determine if a given year is a leap year using comparison operators.
function leapyear(year:number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0}
console.log(leapyear(2024));
console.log(leapyear(1999));
console.log(leapyear(2008));

//Question 107: Write a condition using logical operators that checks if a number is divisible by both 2 and 3.
function checkDivisibleNumber(num: number): boolean {
    return num % 2 === 0 && num % 3 === 0}
console.log(checkDivisibleNumber(10))
console.log(checkDivisibleNumber(18))
console.log(checkDivisibleNumber(17))

//Question 108: Compare two strings to check if they are identical, ignoring case sensitivity.
function compare_String (x:string, y:string): boolean {
    return x.toUpperCase() === y.toUpperCase()}
console.log(compare_String("mehwishnaz", "MEHWISHNAZ"))
console.log(compare_String("noorulain", "Noorulain"))


