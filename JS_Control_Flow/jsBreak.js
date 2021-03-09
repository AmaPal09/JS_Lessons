//JavaScript break Statement

//For loop with a break statement 
console.log("Break Statement in For loop");
let n1 = 5;

for(let i1 =1; i1<=n1; i1++){
	if (i1 == 3){
		break;
	}
	console.log(i1);
}

//While loop woth a break statement 
console.log(" "); 
console.log("Break Statement in While Loop");

let i2 = 1;
let sum2 = 0;

while (true) {
	if(i2 == 12){
		break;
	}
	sum2 += i2;
	i2+= 1;
}
console.log(`Sum is: ${sum2}`);


//Break Statement with nest loops
console.log(" ");
console.log("Break Statement in nested loops ");
//first for loop
for(let i4=1;i4<=3;i4++){
	//second loop
	for(let j4 = 1; j4<=3; j4++){
		if(i4 == 2){
			break;
		}
		console.log(`i4: ${i4} and j4: ${j4}`);
	}
	console.log(`i4 is: ${i4}`);
}