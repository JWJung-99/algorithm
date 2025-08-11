import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

function solution(word, target) {
	/**
	 * 방법 1
	 */
	// let sum = 0;
	// word.forEach((char) => {
	// 	if (char === target) sum++;
	// });
	// return sum;
	/**
	 * 방법 2
	 */
	return word.split(target).length - 1;
}

for (let i = 1; i <= testCase; i++) {
	const word = input[i * 2 - 1];
	const target = input[i * 2];
	console.log(solution(word, target));
}
