//JavaScript Program to Perform Function Overloading

//program to perform function overloading
function sum1() {
	//if no arguments
	if (arguments.length == 0) {
		console.log("You have not passed any arguments");
	}
	else if (arguments.length == 1) {
		console.log("Pass at least two arguments");
	}
	else {
		let result = 0;
		let length = arguments.length;

		for(i=0; i<length; i++) {
			result = result + arguments[i];
		}
		console.log(result);
	}
}

sum1();
sum1(5);
sum1(5, 15);
sum1(2,5,7,6,200);


function sum2() {
	switch (arguments.length) {
		case 0:
			console.log("You have not passed any arguments");
			break;
		case 1:
			console.log("Pass 2 parameters");
			break;
		default:
			let result = 0;
			let length = arguments.length;

			for (i=0; i<length;i++){
				result = result + arguments[i];
			}
			console.log(result);
			break;
	}
}
sum2();
sum2(5);
sum2(5, 25);
sum2(5,6,9,3,7,300);

