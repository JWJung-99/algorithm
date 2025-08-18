import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

/**
 *
 * @param {string[]} order
 * @param {string} subjects
 * @returns {'YES' | 'NO'}
 */
function solution(order, subjects) {
	let answer = 'YES';

	for (let subject of subjects) {
		if (order.includes(subject)) {
			if (order.shift() !== subject) return 'NO';
		}
	}

	if (order.length) return 'NO';

	return answer;
}

let index = 1;
while (testCase > 0) {
	let order = input[index].split('');
	let subjects = input[index + 1];

	console.log(solution(order, subjects));

	testCase--;
	index += 2;
}
