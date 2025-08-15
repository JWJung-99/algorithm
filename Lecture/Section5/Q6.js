import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

/**
 *
 * @param {number} N
 * @param {string[]} str
 * @returns {string}
 */
function solution(votes) {
	let answer = '';
	let max = 0;
	let result = {};

	for (let vote of votes) {
		result[vote] = (result[vote] ?? 0) + 1;
	}

	for (let [key, value] of Object.entries(result)) {
		if (value > max) {
			max = value;
			answer = key;
		}
	}

	return answer;
}

let index = 1;
while (testCase > 0) {
	// let N = Number(input[index]);
	let votes = input[index + 1];

	console.log(solution(votes));

	testCase--;
	index += 2;
}
