//Declaring a JS function
console.log("");
console.log("Functions");
//Syntax
function functionName() {
	//functionBody
}

//Function to greet strangers
function greetings() {
	console.log("Hello, there!");
}

//Calling the function
greetings();

//--------------------------------------------------------------------
//Function with parameters
console.log("");
console.log("Function with parameters");
//Syntax
function functWithVar(varName) {
	console.log(varName);
}
let testVar = "ABC";
functWithVar(testVar);

//Program to greet people whose names are known
function greet(name) {
	console.log("Hello, "+ name + "!");
}

let name = "Sam";
greet(name);


//--------------------------------------------------------------------
//Function Retuns
console.log("");
console.log("Function Returns");
//Syntax
function funcReturn(varInput) {
	let varOutput = varInput + 1;
	return varOutput;
}
let varInput = 2;
console.log(funcReturn(varInput));

//Program to get sum of 2 numbers
function add2nums(num1,num2) {
	return num1+num2;
	console.log("This line is not printed");
}
let aNum = 2325567;
let bNum = 3456788;
console.log("The sum of 2 numbers is: " + add2nums(aNum, bNum));

//--------------------------------------------------------------------
//Function Expression
console.log("");
console.log("Function Expression");
//Syntax cum expression
let x = function (num) {return num*num};
let y = x(24);
console.log(y);


