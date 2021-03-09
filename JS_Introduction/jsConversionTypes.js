//Implicit conversion

//Implicit Conversion to string
console.log('Implicit Conversion to strings');
//string number + number gives string
let result1;

result1 = '3' + 2;
console.log(result1); //32

result1 = '3' + true;
console.log(result1); //3true

result1 = '3' + undefined 
console.log(result1) //3undefined

result1 = '3' + null;
console.log(result1); //3null


//Implicit Conversion to Numbers
console.log('Implicit conversion to numbers');
//numeric strings used with -,/,* results in number type
let result2;

result2 = '4'-'2';
console.log(result2); //2


//Implicit Conversion to Nan
console.log('Implicit Conversion to NaN');
//mathematical operations on non numeric strings result in NaN
let result3;
result3 = 'hello' - 'world';
console.log(result3); //NaN

let result4; 
result4 = '4'-'hello';
console.log(result4); //NaN

//Implicit Conversion of Booleans
console.log('Implicit Conversion of Booleans');
//if boolean used, true is 1, false is 0;
let result5;
result5 = '4' - true;
console.log(result5); //3

result5 = 4 + true;
console.log(result5); //5

result5 = 4 + false;
console.log(result5); //4

//Implicit Conversion of null
console.log('Implicit Conversion of null');
//null is 0 when used with numbers
let result6;

result6 = 4 + null;
console.log(result6);

result6 = 4-null;
console.log(result6);

//null with strings is string
let result7;
result7 = 'hi' + null;
console.log(result7); // hinull

//Implicit Conversion of Undefined
console.log('Implicit Conversion of Undefined');
//arithmatic conversion of undefined with Boolean, 
//numbers, or null gives Nan
let result8;

result8 = 4 + undefined;
console.log(result8); //NaN

result8 = true + undefined;
console.log(result8); //NaN

result8 = null + undefined;
console.log(result8); //NaN 



//Explicit Conversion
console.log('Explicit Conversions');

//Explicit Conversion to Numbers
console.log('Explicit Conversion to Numbers');
let r1;

r1 = Number('324');
console.log(r1); //324

r1 = Number('324e-1');
console.log(r1); //32.4

//Boolean to Number
r1 = Number(true);
console.log(r1); //1

r1 = Number(false);
console.log(r1); //0

//Null to Number
r1 = Number(null);
console.log(r1); //0

//Empty string to Number
r1 = Number(' '); 
console.log(r1); //0

//Invalid string to Number
r1 = Number('hello');
console.log(r1); //NaN

r1 = Number(undefined);
console.log(r1); //NaN

r1 = Number(NaN);
console.log(r1); //NaN


//Explicit Conversion to String
console.log('Explicit Conversion to string');
let r2; 
//Number to String
r2 = String(324);
console.log(r2); //"324"

r2 = String(324e-1);
console.log(r2); //"32.4"

r2 = String(2 + 4);
console.log(r2); //"6"

//null to string
r2 = String(null);
console.log(r2); //"null"

//undefined to string
r2 = String(undefined);
console.log(r2); //"underfined"

//NaN to string
r2 = String(NaN);
console.log(r2); //"NaN"

//Boolean to string
r2 = String(true);
console.log(r2); //"true"

r2 = String(false);
console.log(r2); //"false"

//Using toString
r2 = (324).toString();
console.log(r2); //"324"

r2 = true.toString();
console.log(r2); //"true"


//Explicit Conversion to boolean
console.log('Explicit Conversion to Boolean');
let r3; 
//In JavaScript, undefined, null, 0, NaN, '' converts to false
r3 = Boolean('');
console.log(r3); //false

r3 = Boolean(0);
console.log(r3); //false

r3 = Boolean(undefined);
console.log(r3); //false

r3 = Boolean(null);
console.log(r3); //false

r3 = Boolean(NaN);
console.log(r3); //false

//String and Number conversion to Boolean
r3 = Boolean(324);
console.log(r3); //true

r3 = Boolean('hi');
console.log(r3); //true

r3 = Boolean(' ');
console.log(r3); //true








