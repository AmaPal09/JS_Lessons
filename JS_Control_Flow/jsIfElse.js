//JavaScript if...else Statement

//IF Statement
console.log('Only if statement');
const a1 = 5;
if (a1>0){
	console.log(`${a1} is a positive number`);
}

// If...Else Statement
console.log(' ');
console.log('If...Else statement');
const a2 = 5;
console.log(`The number a2 is: ${a2}`);
if (a2>0){
	console.log(`${a2} is a positive number`);
} else {
	console.log(`${a2} is a negative number`);
}

const b2 = -2
console.log(`The number b2 is: ${b2}`);
if (b2>0){
	console.log(`${b2} is a positive number`);
} else {
	console.log(`${b2} is a negative number`);
}


//if...else if statement
console.log(' ');
console.log('If...Else If...Else statement');
let a3 = 5;
console.log(`The number a3 is: ${a3}`);
if (a3>0) {
	console.log(`${a3} is a positive number`);
} else if (a3 == 0) {
	console.log(`${a3} is neither positive nor negative number`);
} else {
	console.log(`${a3} is a negative number`);
}

a3 = 0;
console.log(`The number a3 is: ${a3}`);
if (a3>0) {
	console.log(`${a3} is a positive number`);
} else if (a3 == 0) {
	console.log(`${a3} is neither positive nor negative number`);
} else {
	console.log(`${a3} is a negative number`);
}

a3 = -2;
console.log(`The number a3 is: ${a3}`);
if (a3>0) {
	console.log(`${a3} is a positive number`);
} else if (a3 == 0) {
	console.log(`${a3} is neither positive nor negative number`);
} else {
	console.log(`${a3} is a negative number`);
}



//Nested if...else Statement
console.log(' ');
console.log('Nested if...else Statement');
let a4 = 3;
console.log(`The number a3 is: ${a4}`);
if (a4>=0){
	if (a4==0) {
		console.log(`${a4} is neither positive nor negative number`);		
	} else {
		console.log(`${a4} is a positive number`);
	}
} else {
	console.log(`${a4} is a negative number`);	
}

a4 = 0;
console.log(`The number a3 is: ${a4}`);
if (a4>=0){
	if (a4==0) {
		console.log(`${a4} is neither positive nor negative number`);		
	} else {
		console.log(`${a4} is a positive number`);
	}
} else {
	console.log(`${a4} is a negative number`);	
}

a4 = -3;
console.log(`The number a3 is: ${a4}`);
if (a4>=0){
	if (a4==0) {
		console.log(`${a4} is neither positive nor negative number`);		
	} else {
		console.log(`${a4} is a positive number`);
	}
} else {
	console.log(`${a4} is a negative number`);	
}
