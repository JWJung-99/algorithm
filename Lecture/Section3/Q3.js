import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

function solution(str) {
	let answer = '';

	for (let char of str) {
		if (!isNaN(char)) answer += char;
	}

	return Number(answer);
}

for (let i = 1; i <= testCase; i++) {
	const str = input[i];
	console.log(solution(str));
}
