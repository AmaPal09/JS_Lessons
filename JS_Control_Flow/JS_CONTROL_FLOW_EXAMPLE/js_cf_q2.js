//Check if a number is Positive, Negative, or Zero

const inNum = parseInt(prompt("Enter a number:"));

//check number is greater than 0
if (inNum>0) {
	console.log("The number is +ve");
}
else if(inNum == 0) {
	console.log("The number is zero");
}
else {
	console.log("The number is -ve");
}