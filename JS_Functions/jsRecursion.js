//JavaScript Recursion
// Basic Syntax
// function recurse() {
//     if(condition) {
//         recurse();
//     }
//     else {
//         // stop calling recurse()
//     }
// }

// recurse();

// Print Numbers
//Program to print countdown to 1
function countDown(num) {
		//display the number
		console.log(num);

		const newNumber = num-1;

		if (newNumber > 0) {
			countDown(newNumber);
		}
}

countDown(5)

//Program to get factorial of a number
function factNumber(num) {
	if (num === 0) {
		return 1;
	}
	else {
		return num * factNumber(num-1);
	}
}

const num2 = 4;
if (num2>0){
	fact2 = factNumber(num2);
}
console.log(`Factorial of ${num2} is ${fact2}`);