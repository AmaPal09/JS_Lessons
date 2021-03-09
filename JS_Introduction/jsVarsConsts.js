let num = 5; // var num holds value 5
console.log(num); 

var x; //declared variable using var. 
let y; //declared variablle using let. 

//possible to declare a variable and then assign it value. 
let a; 
a = 5;
console.log(a); 

//possible to declared and initialise a variable at the same time
let b = 6; 
console.log(b);

var c = 7;
console.log(c);

//possible to declare and initialise multiple variables at the same time.
let m = 1, n = 2, o = 3;
console.log(m,n,o);

//if variable is used without declaration, then it has value undefined. 
console.log(x);
console.log(y);

let p = 11;
console.log(p);

p = 12;
console.log(p); 
	
//constants are variables whose values cannot be changed.
const testConst = 99;
console.log(testConst);

//testConst = 100;
// console.log(testConst); 


// Constants are block-scoped. Hence the variable defined 
// inside a block represents a different value than the one outside.
const t1 = 5;
console.log(t1); //5
// t1 = 44 //throws an error

{
	const t1 = 50;
	console.log(t1); //50
}
console.log(t1); //5

// The arr array value is changed and a new element is added.
const arr = ['a','b', 'c','d'];
console.log(arr);
arr[4] = 'e';
console.log(arr);