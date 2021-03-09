//Javascript Program to Generate a Random Number

function getRandomNum(lowerNum, higherNum) {
	var randNum = Math.floor((Math.random() *
		(higherNum-lowerNum) + 1));
	return randNum;
}

const testNum = getRandomNum(1, 10);
console.log(testNum);


//
function getRandomNum2(lowerNum, higherNum) {
	var randNum2 = Math.floor((Math.random() *
		(higherNum-lowerNum+1) + lowerNum));
	return randNum2;
}

const testNum2 = getRandomNum2(11, 20);
console.log(testNum2);
