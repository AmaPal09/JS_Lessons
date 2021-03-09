//JavaScript Program to Pass a Function as Parameter

function greet1() {
	return "Hello";
}

function name1(user, func) {
	const message = func();

	console.log(`${message} ${user}`);
}

name1("John", greet1);
name1("Jack", greet1);
name1("Sara", greet1);