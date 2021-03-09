//JS Operators

console.log('PART I');
//Arithmetic Operators
let x = 5;
let y = 3;
//Addition
console.log('x+y =', x+y); //8

//Subtraction
console.log('y-x =', y-x); //-2

//Multiplication
console.log('x*y =', x*y); //15

//Division
console.log('x/y =', x/y); //1.6666666666666667

//Remainder
console.log('x%y =', x%y); //2

//Increment
console.log('x =', x); //5
console.log('++x =', ++x); //6
console.log('x++ =', x++ ); //x returns 6 and then increases by 1
console.log('x =', x); //7

//Decrement
console.log('x =', x); //7
console.log('--x =', --x); //6
console.log('x-- =', x--); //x returns 6 and then increases by 1
console.log('x =', x); //5

//Exponential
console.log('x*y =', x*y); //15


console.log('PART II');
//JS Assignment Operators
//Assignment Operator
let z = 3;
console.log(z); //3

//Addition Assignment
console.log(z+=1);//4

//Subtractiojn Assignment
console.log(z-=1);//3

//Multiplication Assignment
z+=3;
console.log(z/=2) //3

//Remainder Assignment
console.log(z%=4); //3

//Exponetial Assignment
console.log(z**=2); //9


console.log('PART III');
//Comparison Operators
//equal operator
console.log(2 == 2); //true
console.log(2 == '2'); //true

//not equal operator
console.log(2 !=3); //true
console.log('Hello' != 'hello'); //true

//Strict equal to
console.log(2 === 2); //true
console.log(2 ==='2'); //false

//Strict not equal to
console.log(2 !== '2'); //true
console.log(2 !== 2); //false

//Greater than
console.log(3>2); //true
console.log(2>3); //false

//Less than
console.log(2<3); //true
console.log(3<2); //false

//Greater than equal to
console.log(3>=2); //true
console.log(3>=3); //true
console.log(2>=3); //false

//Less than
console.log(2<=3); //true
console.log(3<=3); //true
console.log(3<2); //false

console.log('PART IV');
//JS Logical Operators
//Logical AND
console.log(true && true); //true
console.log(false && true); //false
console.log(false && false); //false

//Logical OR
console.log(true || true); //true
console.log(true || false); //true
console.log(false || false); //false 

//Logical NOT
console.log(!true); //false
console.log(!false); //true


console.log('PART V');
//Bitwise Logical Operators
//Bitwise AND
let a = 12
let b = 25
console.log(a&b); //8 

//Bitwise OR
console.log(a|b); //29


//Bitwise XOR
console.log(a^b); // 21

//Bitwise NOT
console.log(~a); //-13

//Bitwise Left Shift 
a = 8;
b = 1;
console.log(a << 1); //16

//Bitwise Right Shift
a = 8;
b = 1;
console.log(a >> 1); //4

//Bitwist Zero Fill Right Shift
a = 8;
b = 1;
console.log(a >>> 1); //4


console.log('PART VI');
//String Operations
//Concatination
console.log('Hello' + ' World!'); //Hello World!
let str1 = 'Javascript';
str1 += ' tutorial';
console.log(str1); //Javascript tutorial


console.log('PART VII');
//Other JS Operators
// ,
let p = (2,3,4);
console.log(p); //4

//?:
console.log((5>3) ? 'success':'error'); //success
console.log((5<3) ? 'success':'error'); //error

//typeof
let q = 3;
console.log(typeof(q)); //number
q = 'hi!';
console.log(typeof(q)); //string

//in
let listZ = [1,2,3,4];
console.log(3 in listZ); //true
console.log(5 in listZ); //false




