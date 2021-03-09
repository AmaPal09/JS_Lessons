//Find HCF or GCD

//The Highest Common Factor (HCF) or Greatest Common Divisor 
//(GCD) of two integers is the largest integer that can exactly 
//divide both integers (without a remainder).

const num1 = parseInt(prompt("Enter the first number: "));
const num2 = parseInt(prompt("Enter the second number: "));

let hcf; 
for (let i = 1; i<=num1 && i<=num2; i++){
	//check if i is a factor of both numbers
	if(num1 % i == 0 && num2 % i == 0){
		hcf = i;
	}
}
console.log(`HCF of ${num1} and ${num2} is ${hcf}`);

//using while loop
let number1 = parseInt(prompt("Enter the first number: "));
let number2 = parseInt(prompt("Enter the second number: "));

while (number1 != number2) {
	if (number1 > number2){
		number1 -= number2;
	}
	else {
		number2 -= number1;
	}
}
console.log(`HCF of is ${number1}`);