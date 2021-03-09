//Find the Largest Among Three Numbers

const num1 = parseFloat(prompt("Enter first number: "));
const num2 = parseFloat(prompt("Enter second number: "));
const num3 = parseFloat(prompt("Enter third number: "));

if ((num1 > num2) && (num1 > num3)) {
	console.log(`${num1} is the largest`);
}
else if ((num2 > num1) && (num2 > num3)) {
	console.log(`${num2} is the largest`);
}
else {
	console.log(`${num3} is the largest`);	
}