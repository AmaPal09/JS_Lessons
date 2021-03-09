// JavaScript Program to Find Factorial of Number Using Recursion

function factNum(num) {
	if (num == 0) {
		return 1;
	}
	else {
		return num * factNum(num-1);
	}
}

const inNum = parseInt(prompt("Enter a number: "));

if (inNum >= 0) {
	const factTot = factNum(inNum);
	console.log(`${factTot} is the factorial of ${inNum}`);

}
else {
	console.log("Enter a positive number");
}


