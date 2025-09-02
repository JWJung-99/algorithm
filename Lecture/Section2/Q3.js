import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

function rsp(a, b) {
	if (a === b) return 'D';

	if ((a === 2 && b === 1) || (a === 3 && b === 2) || (a === 1 && b === 3))
		return 'A';
	else return 'B';
}

function solution(a, b) {
	let answer = [];
	for (let i = 0; i < a.length; i++) {
		answer.push(rsp(a[i], b[i]));
	}

	return answer.join('\n');
}

for (let i = 1; i <= testCase; i++) {
	let a = input[i * 2 - 1].split(' ').map(Number);
	let b = input[i * 2].split(' ').map(Number);

	console.log(solution(a, b));
}
