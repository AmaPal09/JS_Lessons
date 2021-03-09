/*
Write program to convert miles and kilometers into each other 
*/

//kilometers to miles
//miles = kilometers * 0.621371

const kmA = parseFloat(prompt('Enter the distance in km: '));

//convert km to mi
const miA = kmA * 0.621371;

//display the converted miles 
console.log(`${kmA} kilometers is ${miA} miles`);


//kiiometers to miles
//kilometer = miles * 1.60934
const miB = parseFloat(prompt('Enter the distance in mi: '));

//convert mi to km
const kmB =  miB * 1.60934;

//display the converted kilometers 
console.log(`${miB} miles is ${kmB} kilometers`);