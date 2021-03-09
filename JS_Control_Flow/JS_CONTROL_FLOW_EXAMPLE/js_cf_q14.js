//Check if the Numbers Have Same Last Digit

const num1 = prompt("Enter the first number");
const num2 = prompt("Enter the second number");

num1Str = String(num1);
num2Str = String(num2);

let lastInd1 = (num1Str.length) -1;
let lastInd2 = (num2Str.length) -1;

if (num1Str[lastInd1] == num2Str[lastInd2]) {
	console.log("Last digits are the same");
}
else{
	console.log("Last digits are different");
}

//PROGRAMIZE solution
const number1 = prompt("Enter first number:");
const number2 = prompt("Enter second number:");
const number3 = prompt("Enter third number:");

let result1 = number1 % 10;
let result2 = number2 % 10;
let result3 = number3 % 10;

if (result1 == result2 && result2 == result3){
	console.log(`${number1}, ${number2} & ${number3} have ` + 
		`same last digits`);
}
else {
	console.log(`${number1}, ${number2} & ${number3} have ` + 
		`different last digits`);	
}