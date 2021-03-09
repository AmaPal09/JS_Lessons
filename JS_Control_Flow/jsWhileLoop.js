//JS While Loop


//Print natural numbers upto 5 using while loop
console.log('Print numbers upto 5');
let i1 = 1, n1 = 5; 
//while loop from i = 1 to 5
while(i1<=n1){
	console.log(i1);
	i1 += 1; 
}

//Print sum of all even numbers upto 20
console.log(' ');
console.log('Print sum of all even numbers upto 20');
let i2 = 1, n2 = 20;
let sum2 = 0
while (i2 <= 20) {
	if (i2 % 2 == 0) {
		sum2 += i2;
	}
	i2+=1;
}
console.log(`The sum is: ${sum2}`);


//JavaScript do...while Loop
console.log(' ');
console.log('Print numbers upto n');
let i3 = 1;
const n3 = 5;
do{
	console.log(i3);
	i3+= 1;
} while (i3<=n3)

