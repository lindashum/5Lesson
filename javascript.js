// JAVASCRIPT CHEAT SHEET

////// Basic Data Types:
// String - defined by quotation marks
"Hello World";
// Number - separated by commas
5, 5.5, 1000;
// Boolean - true, false
2===3;
// Undefined (no value has been assigned)
var x;
// Array: [Position 0, Position 1, Position 2] → A comma separated list of values in []. 
// *note with arrays: They are treated as a collection of values.
var colors = ["red","pink","purple"];
// Object: {key name:value, key name:value} → these name:value pairs are properties and all are contained in curly brackets
var computerTypes = {
	brand: Apple
	version: Macbook Air
	screenSize: "13in"
////// Variables: are containers for storing data. They are treated as a SINGLE VALUE.
// Combining variables:
var a = 0;
var b = 100;
console.log(a + b);
// This is a variable for an array:
var x = "John" + " " + "Doe";
// Combining variables of arrays:
var colors = ["red","pink","purple"];
var numbers = [0, 100, 200, 300, 400];
var numbersAndColors = [numbers, colors];

console.log(numbersAndColors)[1][0]

// Variables of objects:
var smalltalk = {
	breed: "Samoyed"
	age: 3
	dob: "sept 29 2012"
}
console.log(smalltalk["breed"]);
// same as console.log(smalltalk.breed)






////////////////// PRACTICE
var names = "Linda","Diana","Alex","Pomelo";
var titles = "youngest", "middle", "oldest","rabbit";
console.log(names + " is " + titles);

var Shum = {
	firstName: "Linda"
	lastName: "Shum"
	birthday: "Dec 27 1987"
	interests: ["movies", "knitting"]
}
console.log(shum.interests[2])

// delare your variable//////
var sentence1= "I am a sentence";
var sentence2= "Totally different sentence";
// run your logical test
if (sentence1 =sentence2) {
	alert("your sentences are the same")
} else {
	alert("your sentences are not the same")
}
console.log(sentence1 + sentence);
