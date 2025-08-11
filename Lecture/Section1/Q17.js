import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

function solution(arr) {
	let answer = [];

	for (let word of arr) {
		if (!answer.includes(word)) answer.push(word);
	}

	return answer.join('\n');
}

for (let i = 1; i <= testCase; i++) {
	const arr = input[i].split(' ');
	console.log(solution(arr));
}
