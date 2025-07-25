              //🚀 Day 41 Challenge: Start Coding! 🚀 //
 //Question 121: Implement a for loop that counts from 1 to 10 but skips number 5 using the continue statement.

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
      continue;          // Skips the rest of the loop for i = 5
    }
    console.log(i);      // Logs numbers 1-4 and 6-10
}            
 
//Question 122: Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.

let counting: number = 10;     // This while loop counts down from 10 to 1 and stops at 5
while (counting > 0) {        
  if (counting === 5) {
    break;                    // Exits the loop when counter reaches 5
  }
  console.log(counting);
  counting--;                 // Decrements the counter
}

             
//Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.

function findFirstVowel(str: string): void {
    let vowels = "aeiouAEIOU";
    for (const char of str) {
      if (vowels.includes(char)) {
        console.log(`First vowel found: ${char}`);
        break; // Stops the loop at the first vowel found
      }
      console.log(char); // Logs each character until a vowel is encountered
    }
  }
  
  findFirstVowel("Mehwish"); 
  