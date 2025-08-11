import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

function dp(n) {
	if (n === 1) return 1;
	if (n === 2) return 2;

	return dp(n - 1) + dp(n - 2);
}

function solution(n) {
	return dp(n);
}

for (let i = 1; i <= testCase; i++) {
	const n = Number(input[i]);
	console.log(solution(n));
}
