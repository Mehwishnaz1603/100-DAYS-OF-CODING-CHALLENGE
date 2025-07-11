                //🚀 Day 37 Challenge: Start Coding! 🚀//


//Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult).

function categorizPersonseAge(age: number): string {
    if (age < 12) {
      return "child";
    } else if (age <= 18) {
      return "teenager";
    } else {
      return "adult";
    }
  }
  //The fuction give different persons categories according to age
  console.log(categorizPersonseAge(11)); 
  console.log(categorizPersonseAge(18)); 
  console.log(categorizPersonseAge(27))
  

