//JavaScript Program to Check If a Variable is of Function Type

function testVariables1(variable1) {
	if (variable1 instanceof Function) {
		console.log("The variable is of function type");
	}
	else {
		console.log("The variable is not of function type");
	}
}

const count1 = true;
const x1 = function() {
	console.log("hello");
}

testVariables1(count1);
testVariables1(x1);


function testVariables2(variable2) {
	if (typeof variable2 == "function") {
		console.log("The variable is of function type");
	}
	else {
		console.log("The variable is not of function type");
	}
}

const count2 = true;
const x2 = function() {
	console.log("hello");
}

testVariables2(count2);
testVariables2(x2);




function testVariables3(variables3) {
	if (Object.prototype.toString.call(variables3) == "[object Function]") {
		console.log("The variable is of function type");
	}
	else {
		console.log("The variable is not of function type");
	}
}

const count3 = true;
const x3 = function() {
	console.log("hello");
}

testVariables3(count3);
testVariables3(x3);