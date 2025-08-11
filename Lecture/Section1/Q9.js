import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

function solution(str) {
	return str.replace(/A/g, '#');
}

for (let i = 1; i <= testCase; i++) {
	const word = input[i];
	console.log(solution(word));
}
