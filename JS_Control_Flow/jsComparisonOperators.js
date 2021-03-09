//JS Comparison Operators

console.log('Comparison Operators');
//Equal to Operator
const a1 = 5, b1 = 2, c1 = 'hello';
//equal operator
console.log(a1 == 5);
console.log(b1 == '2');   // true
console.log(c1 == 'Hello');  // false

//Not Equal to Operator
const a2 = 3, b2 = 'hello';
// not equal operator
console.log(a2 != 2); // true
console.log(b2 != 'Hello'); // true


//Strict Equal to Operator
const a3 = 2;
// strict equal operator
console.log(a3 === 2); // true
console.log(a3 === '2'); // false


// Strict Not Equal to Operator
const a4 = 2, b4 = 'hello';
// strict not equal operator
console.log(a4 !== 2); // false
console.log(a4 !== '2'); // true
console.log(b4 !== 'Hello'); // true


// Greater than Operator
const a5 = 3;
// greater than operator
console.log(a5 > 2); // true


// Greater than or Equal to Operator
const a6 = 3;
// greater than or equal operator
console.log(a6 >= 3); //true


// Less than Operator
const a7 = 3, b7 = 2;
// less than operator
console.log(a7 < 2); // false
console.log(b7 < 3); // true


// Less than or Equal to Operator
const a8 = 2;
// less than or equal operator
console.log(a8 <= 3) // true
console.log(a8 <= 2); // true


console.log('Logical Operators');
//JavaScript Logical Operators

//Logical AND Operator
const a9 = true, b9 = false;
const c9 = 4;
// logical AND
console.log(a9 && a9); // true
console.log(a9 && b9);  // false
console.log((c9 > 2) && (c9 < 2)); // false


//Logical OR Operator
const a10 = true, b10 = false, c10 = 4;
// logical OR
console.log(a10 || b10); // true
console.log(b10 || b10); // false
console.log((c10>2) || (c10<2)); // true


//Logical NOT Operator
const a11 = true, b11 = false;
// logical NOT
console.log(!a11); // false
console.log(!b11); // true
