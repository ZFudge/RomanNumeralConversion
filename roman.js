const roman = {
	"1": "I",
	"5": "V",
	"10": "X",
	"50": "L",
	"100": "C",
	"500": "D",
	"1000": "M"
};

const split = (num) => {
	return (num <= 10) ? [num] : (
		(num <= 100) ? (num % 10 === 0) ? num : [num - (num % 10), num % 10]
		: (num <= 1000) ? (num % 10 === 0) ? num : [num - (num % 100), (num % 100) - (num % 10), num % 10]
		: (num % 10 === 0) ? num : [num - (num % 1000), (num % 1000) - (num % 100), (num % 100) - (num % 10), num % 10]
	);
};

function convert(arr) {
	const newArr = [];



	return newArr.join("");
}

function conversion(single, half, whole, num) {
	const newArr = [];

	if (whole === num) {
		newArr.push(whole);
	} else if (num === whole * 0.4 || num === whole * 0.9) {
		if (num < half) {
			newArr.push(single,half);
		} else {
			newArr.push(single,whole);
		}
	} else {
		if (num % half === num) {
			for (let i = single; i <= num; i += single) {
				newArr.push(single);
			}
		} else {
			newArr.push(half);
			for (let i = single; i <= num % half; i += single) {
				newArr.push(single);
			}
		}
	}

	return newArr.join("");
}
