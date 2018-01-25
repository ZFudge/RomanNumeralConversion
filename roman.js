const numerals = {
	I: 1,
	V: 5,
	X: 10,
	L: 50,
	C: 100,
	D: 500,
	M: 1000
};

function split(num) {
	if (num <= 10) {
		return num;
	} else if (num <= 100) {
		if (num % 10 === 0) {
			return num;
		} else {
			return [num - (num % 10), num % 10];
		}
	} else if (num <= 1000) {
		if (num % 10 === 0) {
			return num;
		} else {
			return [num - (num % 100), (num % 100) - (num % 10), num % 10];
		}
	} else {
		if (num % 10 === 0) {
			return num;
		} else {
			return [num - (num % 1000), (num % 1000) - (num % 100), (num % 100) - (num % 10), num % 10];
		}
	}
}
