//JavaScript Program to Find Sum of Natural Numbers Using Recursion

function sumNums(nums) {
	if (nums>0) {
		return nums + sumNums(nums-1);
	}
	else {
		return nums;
	}
}

const addedNums = sumNums(16);

console.log(addedNums);