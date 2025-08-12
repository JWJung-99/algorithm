import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

function solution(arr) {
	let sortedArr = [...arr].sort((a, b) => b - a);
	let rankMap = {};
	let rank = 1;

	for (let score of sortedArr) {
		if (!(score in rankMap)) {
			rankMap[score] = rank;
		}

		rank++;
	}

	return arr.map((score) => rankMap[score]).join(' ');
}

for (let i = 1; i <= testCase; i++) {
	const score = input[i].split(' ').map(Number);
	console.log(solution(score));
}
