//Program to Find LCM

//The Least Common Multiple (LCM) of two integers is the smallest 
//positive integer that is perfectly divisible by both integers.

const num1 = parseInt(prompt("Enter first number: "));
const num2 = parseInt(prompt("Enter second number: "));

let lcm;

//Higher number of the 2 is stored in min
let min = (num1 < num2) ? num2:num1;

for (let i = min; i <= num1*num2; i++){
	if (i%num1 == 0 && i%num2 == 0) {
		lcm = i;
		break;
	} 
}
console.log(`LCM of ${num1} & ${num2} is ${lcm}`);
console.log("Done1");

//using while loop
const number1 = parseInt(prompt("Enter first number: "));
const number2 = parseInt(prompt("Enter second number: "));

//Higher number of the 2 is stored in min
let minNum = (number1 < number2) ? number2:number1;

while (true) {
	if (minNum % number1 == 0 && minNum % number2 == 0) {
		console.log(`LCM of ${number1} & ${number2} is ${minNum}`);
		break;
	} 
	minNum += 1;
}
console.log("Done2");