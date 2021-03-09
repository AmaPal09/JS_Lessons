/*
 Write a program to swap the 2 varialbes provided by the user
*/

let a = prompt('Enter the first variable ');
let b = prompt('Enter the second variable  ');

let temp;

//swap the 2 variables 
temp = a;
a = b;
b = temp;

console.log(`The value of the first variable after swapping: ${a}`);
console.log(`The value of the second variable after swapping: ${b}`);