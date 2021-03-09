//JavaScript Hoisting

//using test1 before declaring
console.log(test1); // undefined
var test1;

var test1;
console.log(test1) // undefined

//variable hoisting with var
//program to display value
console.log(" ");
a1 = 5;
console.log(a1); //5
var a1;
console.log(a1); //5
console.log("**");
var b1;
b1 = 5
console.log(b1); //5

// //variable hoisting with let
// a5 = 5; //ReferenceError: Cannot access 'a5' before initialization
// console.log(a5);
// let a5;


//Variable hoisting
console.log(" ");
console.log("Behavior of variable hoisting");
//program to display value
a2 = 5;
console.log(a2); //5
var a2 = 3;

//JS initializations are not hoisted
console.log(b2); //undefined
var b2 = 3;

//Var initialized without value.
var a3;
console.log(a3); //undefined
a3 = 3;


//Variable hoisting inside a function
console.log(" ");
console.log("Variable hoisting inside a function");

//program to display values
var a4 = 4;
function greet4() {
	b4 = "hello";
	console.log(b4); //hello
	var b4;
}

greet4();
// console.log(b4); //ReferenceError: b4 is not defined


//Function Hoisting
console.log("  ");
console.log("Function Hoisting");

greet6();
function greet6() {
	console.log("Hello");
}

// //Function as Expression Hoisting
// greet7(); //ReferenceError: Cannot access 'greet7' before initialization
// let greet7 = function (){
// 	console.log("Hi there!");
// }

