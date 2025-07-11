             // 🚀 Day 45 Challenge: Start Coding! 🚀 //

//Question 133: Write a JavaScript object and convert it into a JSON string.
let  userProfile_1 = {name: "MehwishNaz", age: 26, city: "Karachi"};
let jsonString_1 = JSON.stringify(userProfile_1);   // Converts the object into a JSON string
  console.log(jsonString_1); 
  
//Question 134: Take a JSON string and parse it into a JavaScript object.
const jsonString_2 = {name: "MehwishNaz", age: 26, city: "Karachi"};
const user_Profile_2= JSON.parse(jsonString_1);     // Parses the JSON string back into a JavaScript object
console.log(userProfile_1); // Outputs the original object

//Question 135: Explain how you can format a JSON string with proper indentation for readability.
  
  // Converts the object into a JSON string with indentation
  let  userProfile_3= {name: "MehwishNaz", age: 26, city: "Karachi"};
  let jsonString_3 = JSON.stringify(userProfile_3, null, 2); 
  // The '2' specifies the number of spaces to use as white space
  console.log(jsonString_3);
  
  
