//Find roots of the quadratic equation when coefficients are provided
// Quadratic equation: ax**2 + bx + c = 0
// where a, b and c are real numbers
// a != 0

//roots of quadratic equation are:
// (r1, r2) = (-b +- sqrt(b**2-4ac))/2a
// here, (b**2 -4ac is the discriminant)
//So,
//if discriminant > 0, roots are real and different 
//r1 = (-b + sqrt(b**2-4ac))/2a
//r2 = (-b - sqrt(b**2-4ac))/2a
//elif discriminant = 0, roots are real and equal
//r1=r2= -b/2a
//else (disciminant <0), roots are imaginary/complex and different 
//r1= -b/2a + i*sqrt(b**2-4ac)/2a
//r2= -b/2a - i*sqrt(b**2-4ac)/2a

let root1, root2;

let a = prompt("Enter coefficient of x**2: ");
let b = prompt("Enter coefficient of x: "); 
let c = prompt("Enter constanct: "); 

let discriminant = ((b**2) - (4*a*c));

if (discriminant > 0) {
	root1 = (-b + Math.sqrt(discriminant))/2*a;
	root2 = (-b - Math.sqrt(discriminant))/2*a;
	console.log(`The roots of the equation are: ${root1} & ` +
		`${root2}`);
} 
else if (discriminant == 0){
	root1 = root2 = (-b/(2*a));
	console.log(`The roots of the equation are: ${root1} & ` +
		` ${root2}`);	
}
else {
	// root1 = (-b + Math.sqrt(-1*discriminant))/2*a;
	// root2 = (-b - Math.sqrt(-1*discriminant))/2*a;
	let realPart = (-b/(2*a)).toFixed(2)
	let imagPart = (Math.sqrt(-discriminant)/(2*a)).toFixed(2)
	console.log(`The roots of the equation are: `+ 
		`${realPart} +${imagPart}i & ${realPart} - ${imagPart}i` );	
}
console.log("Done");