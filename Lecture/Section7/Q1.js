import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

/**
 *
 * @param {number[]} numbers
 * @returns {number[]}
 */
function solution(numbers) {
	let answer = [];

	return answer;
}

let index = 1;
while (testCase > 0) {
	const numbers = input[index].split(' ').map(Number);
	console.log(solution(numbers));

	testCase--;
	index += 2;
}
