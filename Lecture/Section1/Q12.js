import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

/**
 *
 * @param {string} str
 * @returns {string}
 */
function solution(str) {
	return str.toUpperCase();
}

for (let i = 1; i <= testCase; i++) {
	const str = input[i];
	console.log(solution(str));
}
