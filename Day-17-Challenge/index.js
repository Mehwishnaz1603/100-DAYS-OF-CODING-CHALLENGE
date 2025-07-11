// 🚀 Day 17 Challenge: Start Coding! 🚀//
//Question 49: Function with Rest Parameters: Write a function that takes a rest parameter representing
// multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.
function hobbies() {
    var hobby = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobby[_i] = arguments[_i];
    }
    hobby.forEach(function (hobby) {
        console.log("I enjoy ".concat(hobby, "!"));
    });
}
hobbies("Learning", "Teaching", "Coding");
//Question 50: Multiline Template Literals: Use template literals to create a multiline string that 
//describes your ideal day. Include at least three different activities.
var myIdealDay = "Thats routine is involve in my Ideal day:\n1. I wake up at early in the morning.\n2. I do coding for 4 hours daily in the evening.\n3. I trad books  in free time.";
console.log(myIdealDay);
//Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle
//and refactor it into an arrow function.
function calculate_area_arrow(height, width) {
    return height * width;
}
var cal_arrow = function (height, width) { return height * width; };
console.log(calculate_area_arrow(7, 5));
