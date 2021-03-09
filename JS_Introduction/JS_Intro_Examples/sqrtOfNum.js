/*
Write a program the return the square root of the 2 numbers 
provided by the user 
*/

//Get the number from the user
let num = parseInt(prompt('Enter the number: '));

//caclulate the square root
let result = Math.sqrt(num);

//Display the square root
console.log(`The square root of ${num} is ${result}`);