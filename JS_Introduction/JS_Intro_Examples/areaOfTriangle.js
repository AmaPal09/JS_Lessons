/*
Write a program the return area of a triangle when its base and height are 
given and area of a triangle when all its 3 sides are provided. 
*/

//Calculate area of traingle when base and height are given
const base = parseFloat(prompt('Enter base of the triangle'));
const height = parseFloat(prompt('Enter height of the triangle'));

//calculate the area 
const areaTri = ((base * height) /2);

//display area of the triangle 
console.log(`Area of triangle with base ${base} and `+
	`height ${height} is ${areaTri}`);

 
//Calculate area of triangle when length of all 3 sides is known
const s1 = parseFloat(prompt('Enter lenght side one of triangle: '));
const s2 = parseFloat(prompt('Enter lenght side two of triangle: '));
const s3 = parseFloat(prompt('Enter lenght side three of triangle: '));

//calculate the area using Heron's formula
const s = (s1 + s2 + s3)/2;
const areaHeron = Math.sqrt(s*(s-s1)*(s-s2)*(s-s3));

console.log(`Area of the triangle whose sides are ${s1}, ${s2} `+
	`and ${s3} is ${areaHeron}`);