import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

/**
 *
 * @param {string} str
 * @returns {string}
 */
function solution(str) {
	let stack = [];
	for (let char of str) {
		if (char === ')') {
			// '('를 만날 때까지 존재하는 모든 원소 제거
			while (stack.pop() !== '(');
		} else {
			stack.push(char);
		}
	}

	return stack.join('');
}

let index = 1;
while (testCase > 0) {
	const str = input[index];
	console.log(solution(str));

	testCase--;
	index += 2;
}
