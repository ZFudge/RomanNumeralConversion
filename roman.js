const roman = {
	"1": "I",
	"5": "V",
	"10": "X",
	"50": "L",
	"100": "C",
	"500": "D",
	"1000": "M"
};

const splitter = (num) => {
	return (num <= 10) ? [num] : (
		(num <= 100) ? (num % 10 === 0) ? [num] : [num - (num % 10), num % 10]
		: (num <= 1000) ? (num % 10 === 0) ? [num] : [num - (num % 100), (num % 100) - (num % 10), num % 10]
		: (num % 10 === 0) ? [num] : [num - (num % 1000), (num % 1000) - (num % 100), (num % 100) - (num % 10), num % 10]
	);
};

function convertToRoman(num) {
	const newArray = [];
	const split = splitter(num);

	split.forEach(function(cur) {
		newArray.push(conversion(cur));
	});

	num = newArray.join("");
	return num;
}

function conversion(num) {
	let single,half,whole;
	(num <= 10) ? single = 1 : (num <= 100) ? single = 10 : (num <= 1000) ? single = 100 : single = 1000;
	half = single * 5;
	whole = half * 2;
	const newArr = [];
	if (whole === num) {
		newArr.push(roman[`${whole}`]);
	} else if (num === whole * 0.4 || num === whole * 0.9) {
		(num < half) ? newArr.push(roman[`${single}`],roman[`${half}`]) : newArr.push(roman[`${single}`],roman[`${whole}`]);
	} else {
		if (num % half === num) {
			for (let i = single; i <= num; i += single) newArr.push(roman[`${single}`]);
		} else {
			newArr.push(roman[`${half}`]);
			for (let i = single; i <= num % half; i += single) newArr.push(roman[`${single}`]);
		}
	}
	return newArr.join("");
}
