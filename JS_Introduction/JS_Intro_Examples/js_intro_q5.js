/* 
Write a program to swap values of 2 variables
*/

let a = 5;
let b = 'x';
console.log(`The 2 variables are ${a}, ${b}`);

let temp; 

//swap the 2 variables 
temp = a;
a = b;
b = temp;

console.log(`The swapped variables are ${a}, ${b}`);
