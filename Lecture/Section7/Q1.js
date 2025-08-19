import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

/**
 *
 * @param {number[]} numbers
 * @returns {string}
 */
function solution(numbers) {
	for (let i = 0; i < numbers.length - 1; i++) {
		for (let j = i + 1; j < numbers.length; j++) {
			if (numbers[i] > numbers[j])
				[numbers[i], numbers[j]] = [numbers[j], numbers[i]];
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
