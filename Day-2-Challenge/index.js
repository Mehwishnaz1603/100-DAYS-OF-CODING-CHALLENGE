//🚀 Day 2 Challenge: Start Coding! 🚀//
// Q4: Famous Quote: Find a quote from a famous person you admire. Print the
//quote and the name of its author. Your output should look something 
//like the following, including the quotation marks:
var quote = " A person who never made a mistake never tried anything new ";
var author = "Albert Einstein";
console.log(" ".concat(author, " once said, \"").concat(quote, "\""));
// Q5: Famous Quote 2: Repeat Exercise 4, but this time store the famousperson’s name in a variable
//called famous_person. Then compose your message and store it in a new variable called message.
// Print your message.
var qoute = "A person who nevere made a mistake never tried anything new ";
var famous_person = "Albert Einstein";
var message = "".concat(famous_person, " once said, ").concat(qoute);
console.log(message);
// Q6:Stripping Names: Store a person’s name, and include some whitespace characters at the beginning
//and end of the name. Make sure you use each character combination, "\t" and "\n", at least once.
//Print the name once, so the whitespace around the name is displayed. Then print the name after 
//striping the white spaces.
var personName = "\n\t Mehwish Naz \t\n";
console.log(personName);
var stripped = personName.trim();
console.log(stripped);
