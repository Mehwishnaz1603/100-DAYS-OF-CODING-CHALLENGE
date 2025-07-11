// 🚀 Day 40 Challenge: Start Coding! 🚀 //
//Question 118: Write a loop that logs numbers from 1 to 10 to the console.
for (var i = 1; i <= 10; i++) {
    console.log(i);
}
;
//Question 119: Create a while loop that logs "Hello, World!" 5 times.
var countlog = 0;
while (countlog < 5) { // This while loop runs until count is 5 times
    console.log("Hello, World!");
    countlog++;
}
; // Increments count by 1
//Question 120: Use a for...of loop to iterate through an array of your favorite movies and log each one.
var favoriteMovies = ["Herry Potter", "The Smurf", "The Little SnowWhite", "The Paradise"];
for (var _i = 0, favoriteMovies_1 = favoriteMovies; _i < favoriteMovies_1.length; _i++) { // Uses a for...of loop to iterate through favoriteMovies
    var movies = favoriteMovies_1[_i];
    console.log(movies);
}
;
