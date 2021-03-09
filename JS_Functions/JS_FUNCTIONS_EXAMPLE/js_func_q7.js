// JavaScript Program to Set a Default Parameter Value For a Function

//program to set default parameter value

function sumnums(para1 = 3, para2 = 10) {
	return para1 + para2;
}

console.log(sumnums(5,15));
console.log(sumnums(7));
console.log(sumnums());

let calculate = function(x = 15, y =x+2) {
	return x+y;
}
const result1 = calculate(10);
console.log(result1);

const result2 = calculate();
console.log(result2);