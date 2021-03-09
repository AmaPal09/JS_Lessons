// Global Scope
let a = "hello";

function greet(){
	console.log(a);
}

greet();


// program to show the change in global variable
console.log(" ");
console.log("Change in global variable");
let a1 = "Hello";

function greetings() {
    a1 = 3;
}

// before the function call
console.log(a1);

//after the function call
greetings();
console.log(a1); // 3


// program to show variable automatically becomes a global variable.
console.log(" ");
console.log("Variable automatically becomes global variable");

function consolation() {
	b1 = "There, there!";
}
consolation();
console.log(b1);


//Local Scope
// program showing local scope of a variable
console.log(" ");
console.log("Scope of local variable");
let a2 = "hello";

function greetName() {
	let b2 = "Sam"
	console.log(a2 + " " + b2);
}
greetName();
// console.log(a2 + " " + b2); //error


// program showing block-scoped concept
// global variable
let a3 = "hello!";

function greet3() {
	//local variable
	let b3 = "world";
	console.log(a3 + " " + b3); //hello! world

	if (b3 == "world") {
		//block scoped variable
		let c3 = "There, there";
		console.log(a3+" "+b3+" "+c3); //hello! world There, there
	}

	//variable c3 cannot be accessed outside its box
	// console.log(a3+" "+b3+" "+c3);
}



// var instead of let
// global variable
console.log(" ");
console.log("Var instead of let scoping");
let a4 = "hello!";

function greet4() {
	//local variable
	let b4 = "world";
	console.log(a4 + " " + b4); //hello! world

	if (b4 == "world") {
		var c4 = "There, there";
		console.log(a4+" "+b4+" "+c4); //hello! world There, there
	}

	//variable c4 accessed outside its box
	console.log(a4+" "+b4+" "+c4); //hello! world There, there
}

greet4();