//sum of natural numbers in JavaScript.

const number = parseInt(prompt());
//var to store sum
let sum = 0;

for (let i = 1; i<=number; i++) {
	sum += i;
}
console.log(sum)