import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

/**
 *
 * @param {number[]} numbers
 * @returns {string}
 */
function solution(numbers) {
	for (let i = numbers.length - 1; i; i--) {
		for (let j = 0; j < i; j++) {
			if (numbers[j] > numbers[j + 1])
				[numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
		}
	}

	return numbers.join(' ');
}

let index = 1;
while (testCase > 0) {
	const numbers = input[index].split(' ').map(Number);
	console.log(solution(numbers));

	testCase--;
	index += 1;
}
