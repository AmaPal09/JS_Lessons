//Declaring and accessing JS objects

// program to create JavaScript object using object literal
const person = {
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
    greet: function() {
        console.log('Hello everyone.');
    },
    score: {
        maths: 90,
        science: 80
    }
};

console.log(typeof person); // object

// accessing the object value
console.log(person.name); //John
console.log(person.hobbies[0]); //reading
person.greet(); //Hello everyone
console.log(person.score.maths); //90


// program to create JavaScript object using instance of an object
const person2 = new Object( {
	name: 'Jonny',
	age: 33,
	hobbies: ['cycling', 'swimming', 'riding'],
	greet: function() {
		console.log("Howdi!");
	},
	score: {
		history: 55,
		english: 80
	}
} ) ;

console.log(typeof person2); //object

//accessing the object values
console.log(person2.name); //Jonny
console.log(person2.hobbies[1]); //swimming
person2.greet(); //Howdi!
console.log(person2.score.english); //80


// program to create JavaScript object using instance of an object
function Person3() {
	this.name = "James",
	this.age = 44,
	this.hobbies = ['painting', 'singing', 'dancing'],
	this.greet = function() {
		console.log("Hey, there!");
	}
	this.score = {
		geography: 88,
		socialSciences: 65
	}
}

const person3 = new Person3();

console.log(typeof person3); //object

//accessing the object values
console.log(person3.name); //James
console.log(person3.hobbies[2]); //dancing
person3.greet(); //Hey, there!
console.log(person3.score.geography); //88


//ACCESSING PROPERTIES
console.log(" ");

//Using dot notation
const person4 = {
    name: 'John',
    age: 20,
};

// accessing property
console.log(person4.name); // John

//Using bracket notation
const person5 = {
	name: 'Harry',
	age: 30,
};

//accessing property
console.log(person5.name) //Harry



//NESTED OBJECTS
console.log(" ");

const student1 = {
	name: 'Tom',
	grade: 4,
	marks: {
		english: 50,
		spanish: 55,
		mandarin: 60
	}
};

//accessing property of student1
console.log(student1.grade); //4

//accessing property of marks objet
console.log(student1.marks.spanish); //55


//JS Methods
console.log(" ");

const person5 = {
	name: "Ana",
	age: 22,
	greet: function() {
		console.log("Hi folks!");
	}
}

person5.greet();