import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

function solution(s, t) {
	let answer = [];
	let position = 1000;

	// 순방향
	for (let i = 0; i < s.length; i++) {
		position++;
		if (s[i] === t) position = 0;
		answer.push(position);
	}

	// 역방향
	s.reverse();
	answer.reverse();
	position = 1000;

	for (let i = 0; i < s.length; i++) {
		position++;

		if (s[i] === t) position = 0;

		answer[i] = Math.min(answer[i], position);
	}

	return answer.reverse().join(' ');
}

for (let i = 1; i <= testCase; i++) {
	let [s, t] = input[i].split(' ');
	console.log(solution(s.split(''), t));
}
