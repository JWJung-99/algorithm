import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

/**
 * @description 정렬 이용
 * @param {number[]} numbers
 * @returns {string}
 */
function solution1(numbers) {
	let positiveNums = [];
	let negativeNums = [];

	numbers.forEach((number) => {
		if (number > 0) positiveNums.push(number);
		else negativeNums.push(number);
	});

	return [...negativeNums, ...positiveNums].join(' ');
}

/**
 * @description 정렬 이용
 * @param {number[]} numbers
 * @returns {string}
 */
function solution2(numbers) {
	for (let i = numbers.length - 1; i > 0; i--) {
		for (let j = 0; j < i; j++) {
			if (numbers[j] > 0 && numbers[j + 1] < 0)
				[numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
		}
	}

	return numbers.join(' ');
}

let index = 1;
while (testCase > 0) {
	const numbers = input[index].split(' ').map(Number);
	console.log(solution1(numbers));
	console.log(solution2(numbers));

	testCase--;
	index += 1;
}
