//Program to Check Prime Number

const inNum = parseInt(prompt("Enter number: ")); 

let ctr = 2
let primeFlag = false;

while (ctr < inNum) {
	if ((inNum % ctr) == 0) {
		primeFlag = true;
		break;
	}
	ctr += 1;
}

if (primeFlag) {
	console.log(`${inNum} is not a prime number`);	
}
else {
	console.log(`${inNum} is a prime number`);
}

//programiz solution
// take input from the user
// const number = parseInt(prompt("Enter a positive number: "));
// let isPrime = true;

// check if number is equal to 1
// if (number === 1) {
    // console.log("1 is neither prime nor composite number.");
// }

// check if number is greater than 1
// else if (number > 1) {

    // looping through 2 to number-1
    // for (let i = 2; i < number; i++) {
        // if (number % i == 0) {
            // isPrime = false;
            // break;
        // }
    // }

    // if (isPrime) {
        // console.log(`${number} is a prime number`);
    // } else {
        // console.log(`${number} is a not prime number`);
    // }
// }

// check if number is less than 1
// else {
    // console.log("The number is not a prime number.");
// }