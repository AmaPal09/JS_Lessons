//Print the Fibonacci Sequence

//A fibonacci sequence is written as:
//0, 1, 1, 2, 3, 5, 8, 13, 21, ...
//The Fibonacci sequence is the integer sequence where the first two 
//terms are 0 and 1. After that, the next term is defined as the sum 
//of the previous two terms.

// let n1 = 0;
// let n2 = 1; 

// //Get sequence number from user 
// const seqNum = parseInt(prompt("Enter Fibonacci sequence number: "));
// console.log("The Fibonacci sequence is as follows: ");
// if (seqNum === 0) {
// 	console.log("");
// }
// else if (seqNum === 1) {
// 	console.log(n1);	
// }
// else if (seqNum === 2) {
// 	console.log(n1);
// 	console.log(n2);
// }
// else {
// 	console.log(n1);
// 	console.log(n2);
// 	//number to catch sum for sequence 
// 	let result = 0; 
// 	//counter to see if sequence number is reached 
// 	let ctr = 2; 
// 	//calculate the sequence 
// 	while (ctr < seqNum) {
// 		result = n1 + n2;
// 		console.log(result);
// 		n1 = n2;
// 		n2 = result;
// 		ctr += 1 ;
// 	}
// }
// console.log("Done");


//PRGRAMIZE solution
const number = parseInt(prompt("Enter the number of terms: "));
let n1 = 0, n2 = 1, nextTerm;

console.log("Fibonacci series ");

for(let i = 1; i <=number; i++){
	console.log(n1);
	nextTerm = n1 + n2;
	n1 = n2;
	n2 = nextTerm;
}
console.log("Done")

//Fibonachi series upto a certain number
const uptoNum = parseInt(prompt("Enter a positive number: "));
let no1 = 0, no2 = 1, nextOTerm;
console.log("Fibonachi series: ");
nextOTerm = no1 + no2; 

//Get series with numbers upto uptoNum
while(nextOTerm <= uptoNum){
	//print the term 
	console.log(nextOTerm);

	no1 = no2;
	no2 = nextOTerm;
	nextOTerm = no1 + no2;
}
console.log("Done");