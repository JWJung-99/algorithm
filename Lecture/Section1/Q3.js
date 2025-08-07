import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

function solution(n) {
	return Math.ceil(n / 12);
}

for (let i = 1; i <= testCase; i++) {
	let students = Number(input[i]);
	console.log(solution(students));
}
