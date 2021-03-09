//Print All Prime Numbers in an Interval

//take user input
const lowerNum = parseInt(prompt("Enter lower number: "));
const higherNum = parseInt(prompt("Enter the higher number: "));

if (lowerNum > higherNum){
	console.log("The numbers are in descending order, " + 
		"please refresh and try again");
}
else if(lowerNum == higherNum) {
	console.log("The numbers are equal, no prime numbers " + 
		"between them");
}
else {
	if (higherNum <= 1) {
		console.log("Number prime numbers between the numbers");
	}
	else {
		for(let betNum = lowerNum; betNum <= higherNum; betNum ++){
			let primeFlag = true;
			for(let ctr = 2; ctr < betNum; ctr++){
				if ((betNum % ctr) == 0){
					primeFlag = false;
					break;
				}
			}
			if (primeFlag==true){ 
				console.log(`${betNum} is a prime number between the `+
				`two numbers`);
			}
		}
	}
}
console.log("Done");