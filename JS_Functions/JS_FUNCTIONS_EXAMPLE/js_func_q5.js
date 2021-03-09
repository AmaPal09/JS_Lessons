//JavaScript Program to Convert Decimal to Binary

function decToBin(num) {
	let bin = 0;
	let rem, i = 1, step = 1;

	while (num != 0){
		rem = num % 2;
		num = parseInt(num/2);
		bin = bin + rem* i
		i = i *10;
	}
	return bin;
}



const decNum = parseInt(prompt("Enter a decimal number: "));
if (decNum >= 0) {
	const binNum = decToBin(decNum);
	console.log(`${binNum} is binary for ${decNum} `);
}
else {
	console.log("Enter a positive number");
}
