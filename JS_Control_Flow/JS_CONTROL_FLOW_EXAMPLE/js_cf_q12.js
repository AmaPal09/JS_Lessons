//Make a Simple Calculator

// //get the operation which the user wishes to perform 
// const operator = prompt("Enter any operator from +, -, * or / ");

// //get the 2 operands to perform the operations
// const num1 = parseInt(prompt("Enter first number: "));
// const num2 = parseInt(prompt("Enter second number: "));
// //var to store result of the operation
// let result; 

// if (operator == '+') {
// 	result = num1 + num2; 
// }
// else if (operator == '-') {
// 	result = num1 - num2; 
// }
// else if (operator == '*') {
// 	result = num1 * num2 ; 
// }
// else {
// 	result = num1 / num2; 
// }

// console.log(`${num1} ${operator} ${num2} = ${result}`);


//PROGRAMIZ solution
const operator2 = prompt("Enter any operator from +, -, * or / ");
//get the 2 operands to perform the operations
const number1 = parseInt(prompt("Enter first number: "));
const number2 = parseInt(prompt("Enter second number: "));

let result2; 
switch(operator2) {
	case '+':
		result2 = number1 + number2;
		console.log(`${number1} ${operator2} ${number2} ` + 
		` = ${result2}`);
		break;

	case '-':
		result2 = number1 - number2;
		console.log(`${number1} ${operator2} ${number2} ` + 
		` = ${result2}`);
		break;

	case '*':
		result2 = number1 * number2;
		console.log(`${number1} ${operator2} ${number2} ` + 
		` = ${result2}`);
		break;

	case '/':
		result2 = number1 / number2;
		console.log(`${number1} ${operator2} ${number2} ` + 
		` = ${result2}`);
		break;
	default:
		console.log("Invalid Operator");
		break;

}
