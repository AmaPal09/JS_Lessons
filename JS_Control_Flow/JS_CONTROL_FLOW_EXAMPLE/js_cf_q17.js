//Find the Factors of a Number

//To be the factors of a number, the factor number should exactly 
//divide the number (with 0 remainder).

const number = parseInt(prompt("Enter the number: "));

console.log(`Factors of ${number} are: `);
for (let i = 1; i<=number; i++){
	if (number % i == 0){
		console.log(i);
	}
}