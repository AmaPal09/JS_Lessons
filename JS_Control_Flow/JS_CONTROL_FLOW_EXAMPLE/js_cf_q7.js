//Find the Factorial of a Number
//factorial of n (n!) = 1 * 2 * 3 * 4.....n

// Get input from user 
const num1 = parseInt(prompt("Enter the number: "));

//variable to store factorial of the input
let factNum1 = 1;

if (num1 <0) {
	console.log("Error. Factorial of -ve numbers does not exist");
}
else if (num1 === 0) {
	console.log(`The factorial of ${num1} is 1`);
}
else {
	//multiply numbers upto num1 to get factorial
	for (let i = 1; i <= num1; i++){
		factNum1 *= i;
	}
	console.log(`The factorial of ${num1} is ${factNum1}`);
}