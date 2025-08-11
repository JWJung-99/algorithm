import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

function solution(word) {
	const len = word.length;
	if (len % 2 === 0) {
		return word[parseInt(len / 2) - 1] + word[parseInt(len / 2)];
	} else {
		return word[parseInt(len / 2)];
	}
}

for (let i = 1; i <= testCase; i++) {
	const word = input[i].split('');
	console.log(solution(word));
}
