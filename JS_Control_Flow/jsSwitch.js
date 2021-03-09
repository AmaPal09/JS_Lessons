//JavaScript Switch Statement

//Switch Statement
console.log("Switch Statement");
let a1 = 2;

//switch statement 
switch(a1){
	case 1: 
		a1 = 'one';
		break;
	case 2:
		a1 = 'two';
		break;
	default:
		a1 = 'Not a number';
		break;
}
console.log(`Value of a is: ${a1} `);

//Type checking in Switch Statement 
console.log(" ");
console.log("Type checking in switch statement");
let a2 = 1;

switch(a2){
	case '1':
		a2 = 1;
		break;
	case 1:
		a2 = 'one';
		break;
	case 2:
		a2 = 'two';
		break;
	default:
		a2 = "Not a number";
		break;
}
console.log(`Value of a2 is: ${a2}`);

//Multiple Switch Statements
console.log(" ");
console.log("Multiple switch statements");
let a3 = "apple"
let s3 = '';
//switch 
switch(a3) {
	case "mango":
	case "grapes":
	case "apple":
		s3 = "Is a fruit";
	default:
		s3= "Is not a fruit";
}
console.log(`a3 is ${s3}`);