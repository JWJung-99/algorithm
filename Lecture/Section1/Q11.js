import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

function solution(str) {
	const matches = str.match(/[A-Z]/g);
	return matches ? matches.length : 0;
}

for (let i = 1; i <= testCase; i++) {
	const str = input[i];
	console.log(solution(str));
}
