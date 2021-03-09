//JavaScript for loop

//Program to execute text 10 times
console.log("Print same text 10 times");
for(let i = 1; i<=10; i++) {
	console.log('Hi there!');
}

//Display numbers from 1 to 10.
console.log(" ");
console.log("Print 0 to 9 numbers");
for(let i = 0; i<10 ; i++){
	console.log(i);
}

//Print all even numbers between 0 and 9
console.log(" ");
console.log(" Print even numbers between 0 and 9");
for(let e = 0; e<=9; e+=2) {
	console.log(e);
}

//Print sum of natural numbers upto 100
console.log(" ");
console.log("Print sum of natural numbers upto 100");
let sumOfN = 0;
let n = 100;

//For loop to iterate and calculate the sum
for(let i = 1; i<=n; i++){
	sumOfN += i;
}

console.log(`The sum of 100 natural numbers is ${sumOfN}`);