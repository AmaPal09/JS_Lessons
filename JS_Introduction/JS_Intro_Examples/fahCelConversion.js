/*
Write a program for celsius to Fahrenheit conversion and vice versa
*/

//celsius to fahrenheit:
//F = C * 1.8 + 32
let cel1 = parseFloat(prompt('Enter the temp in degree celsius: '));

//calculate fahrenheit
let fah1 = (cel1 *1.8) + 32

//display fahrenheit
console.log(`${cel1} degress celsius is ${fah1} degree fahrenheit`);


//fahrenheit to celsius:
//C = (F - 32) * 5/9
let fah2 = parseFloat(prompt('Enter the temp in degree fahrenheit: '));

//calculate celsius 
let cel2 = (fah2 - 32) * 5/9

//display celsius 
console.log(`${fah2} degress fahrenheit is ${cel2} degree celsius`);

