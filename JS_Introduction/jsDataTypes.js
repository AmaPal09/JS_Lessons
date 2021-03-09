//JS Strings
//These are used to stored texts. Can be defined in 3 ways show below. 
const name1 = 'Ram';
const name2 = "Hari";
const name3 = `Radha`;

console.log(name1); //Ram
console.log(name2); //Hari
console.log(name3); //Radha

// Backticks are generally used when you need to include variables or 
// expressions into a string. 
const result = `The names are: ${name1} , ${name2} and ${name3}`
console.log(result); //The names are: Ram , Hari and Radha


// JS Numbers
// integer and floating numbers (decimals and exponentials)
const number1 = 3;
const number2 = 3.433;
const number3 = 3e5 

console.log(number1); //3
console.log(number2); //3.433
console.log(number3); //300000

//number type can also be +Infinity, -Infinity, and NaN (not a number)
const n1 = 3/0; 
const n2 = -3/0; 
const n3 = 'abc'/3; 

console.log(n1); //Infinity
console.log(n2); //-Infinity
console.log(n3); //Nan

//JS BigInts
//JS Numbers can store numbers between -(2^53-1) and (2^53-1), for numbers
// larger than that use BigInts
const value1 = 900719925124740998n;
console.log(value1); //900719925124740998n
//adding 2 BigInts
const result1 = value1 + 1n;
console.log(result1); //900719925124740999n

const value2 = 900719925124740998n;
console.log(value2); 
//adding BigInts and Ints leads to errors
//TypeError: Cannot mix BigInt and other types, use explicit conversions
// const result2 = value2 + 1; 
// console.log(result2); 


//JS Boolean
const dataChecked = true;
const valueChecked = false; 
console.log(dataChecked); 
console.log(valueChecked); 


//JS Undefined
// Var declared but no value assigned.
let name;
console.log(name);
// var declared with value undefined. 
let nameU = undefined;
console.log(nameU); 

//JS null;
// used to show that a var is empty or has unknown value
const number = null;
console.log(number);


//JS Symbol
//Immutable, primitive, unique values in variables. 
const val1 = Symbol('hi');
const val2 = Symbol('hi');
console.log(val1==val2);//false
//Though both contain same 'hi', both are different as they are symbols

//JS type. 
//JS is loosely typed language. 
let a;
console.log(a); //undefined
a = 5;
console.log(a); //5, data type is number
a = 'hi'; 
console.log(a); //hi, data type is string.

//JS typeof
//operator to find data types of varialbe. 
const name4 = 'ram';
console.log( typeof(name4) ); //string
const number4 = 5;
console.log(typeof(number4) ); //number
const testChecked = true;
console.log(typeof(testChecked)); //boolean
const testNull = null; 
console.log(typeof(testNull)); //object
//Data type for null is object. Preexisting issue. 


