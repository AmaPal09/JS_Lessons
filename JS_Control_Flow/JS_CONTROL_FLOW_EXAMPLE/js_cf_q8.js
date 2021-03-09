//Display the Multiplication Table

const intTable = parseInt(prompt("Enter a +ve integer: ")); 

let timesIs; 
//calculate the table values upto 10
for(let i = 1; i <= 10; i++){
	timesIs = intTable * i; 

	//display the table
	console.log(`${intTable} * ${i} = ${timesIs}`);
}
