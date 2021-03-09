//Find Armstrong Number in an Interval

//find an Armstrong number between two integer values provied 
//by the user.
//A positive integer is called an Armstrong number (of order n) if:
//abcd... = an + bn + cn + dn + ...

const lowerNum = parseInt(prompt("Enter the lower number: "));
const higherNum = parseInt(prompt("Enter the lower number: "));

//Get all numbers between lowerNum and higherNum
for(let i = lowerNum; i <= higherNum; i++){
	//Number of digits in the number
	let lenOfNum = i.toString().length;
	//store sum
	let sum=0;
	//temp number
	let temp = i;
	while (temp>0){
		let remainder = temp % 10 ;
		sum += remainder ** lenOfNum ;
		temp = parseInt(temp/10); //Convert float to integer
	}
	if (sum === i){
		console.log(i);
	}
}
