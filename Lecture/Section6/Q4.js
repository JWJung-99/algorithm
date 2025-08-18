import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

/**
 *
 * @param {string} str
 * @returns {number}
 */
function solution(str) {
	let stack = [];

	for (let char of str) {
		if (isNaN(char)) {
			const num2 = stack.pop();
			const num1 = stack.pop();
			if (char === '+') stack.push(num1 + num2);
			else if (char === '-') stack.push(num1 - num2);
			else if (char === '*') stack.push(num1 * num2);
			else stack.push(parseInt(num1 / num2));
		} else {
			stack.push(Number(char));
		}
	}

	return stack.pop();
}

let index = 1;
while (testCase > 0) {
	const str = input[index];

	console.log(solution(str));

	testCase--;
	index += 1;
}
