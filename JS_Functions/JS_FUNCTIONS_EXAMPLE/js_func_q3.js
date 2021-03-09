//JavaScript Program to Guess a Random Number

function guessNumber() {
	//generating a random interger from 1 to 10
	const random = Math.floor(Math.random()*10) + 1;

	//take input from user
	let number = parseInt(prompt("Guess a number from 1 to 10: "));

	// take the input until guess is correct
	while(number != random) {
		number = parseInt(prompt("Guess a number from 1 to 10: "));
	}

	// check if the guess is corret
	if (number == random) {
		console.log("You guessed the correct number");
	}
}

guessNumber();