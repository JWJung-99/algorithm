import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

function solution(arr) {
	let maxLength = 0;
	let answer = '';

	for (let word of arr) {
		if (word.length > maxLength) {
			maxLength = word.length;
			answer = word;
		}
	}

	return answer;
}

for (let i = 1; i <= testCase; i++) {
	const n = Number(input[i]);
	const arr = [];

	for (let j = i + 1; j <= i + n; j++) {
		arr.push(input[j]);
	}

	console.log(solution(arr));
}
