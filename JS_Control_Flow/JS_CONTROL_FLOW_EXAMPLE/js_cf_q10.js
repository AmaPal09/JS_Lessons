//Program to Check Armstrong Number

//A positive integer is called an Armstrong number (of order n) if
//abcd... = an + bn + cn + dn + ...


//Check Armstrong number of three digits
// let sum1 = 0
// const number1 = parseInt(prompt("Enter a three digit number: "));

// //convert the number to a string 
// number1Str = String(number1);
// let ctr1 = 0;

// //calc the Armstrong sum of the 3 digits in the number
// while(ctr1 < 3) {
// 	sum1 += Number(number1Str[ctr1]**3);
// 	// console.log(sum1);
// 	ctr1 += 1 ;
// }
// if (number1 === sum1){
// 	console.log("Is an Armstrong number.");
// }
// else {
// 	console.log("Is not an Armstrong number.");
// }

//PROGRAMIZE Solution
//Check if 3 digit number is an Armstrong number
//To hold Armstrong sum of the number
let sum2 = 0;
const number2 = parseInt(prompt("Enter a 3 digit number: "));

//temporary number
let temp2 = number2;

//Calculate the Arstrong sum of the number
while (temp2 > 0) {
	let remainder2 = temp2 % 10;
	sum2 += ((remainder2) ** 3);
	temp2 = parseInt(temp2/10); 
}

//Check if the number is an Armstrong number
if(sum2 === number2){
	console.log(`${number2} is an Armstrong number`);
}
else{
	console.log(`${number2} is not an Armstrong number`);
}
console.log("Done");


//check if any number of n digits is an armstrong number
const number3 = prompt("Enter a +ve integer");
const length3 = number3.length; 

//var to store the numbers 
let sum3 = 0;
//counter for while loop 
let temp3 = number3;

while (temp3 > 0) {
	let remainder3 = temp3 % 10; 
	sum3 += (remainder3 ** length3); 
	temp3 = parseInt(temp3/10); //convert flot into integer
}
if (sum3 == number3) {
	console.log(`${number3} is an Armstrong number`);
}
else{
	console.log(`${number3} is not an Armstrong number`);
}
console.log("Done");