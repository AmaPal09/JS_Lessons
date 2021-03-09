/*
Write a program to calculate the area of a triangle
*/

//Calculate area using base and height
console.log("Area using base and height");

const base = 10;
const height = 8;

//calculate the area
const area = ((base * height) /2) ;

//display the area 
console.log(`For a triangle with base ${base} and height ${height} `+ 
	`the area is ${area}`);


console.log('');


//Calculate area using 3 sides of a triangle/Heron's formula
console.log("Area using lenght of all 3 sides of a triangle ");

const s1 = 14;
const s2 = 10;
const s3 = 6; 

//caclulate area using Heron's formula
const s = (s1+s2+s3)/2
const heronArea = Math.sqrt(s*(s-s1)*(s-s2)*(s-s3));
console.log(
	`The area of the triangle with sides `+ 
	`${s1}, ${s2}, ${s3} is ${heronArea}` 
	);