// JavaScript Program to Pass Parameter to a setTimeout() Function

function greet1() {
	console.log("Hello World");
}

setTimeout(greet1, 3000);
console.log("This message is shown first");


function greet2(x,y) {
	console.log(x);
	console.log(y);
}

setTimeout(greet2, 3000, "Hello", "World");
console.log("This message is shown first");


