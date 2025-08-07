import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

function solution(n) {
	return (n * (n + 1)) / 2;
}

for (let i = 1; i <= testCase; i++) {
	let num = Number(input[i]);
	console.log(solution(num));
}
