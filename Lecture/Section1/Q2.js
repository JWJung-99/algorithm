import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

function solution(sticks) {
	let maxLength = 0;
	let sum = 0;

	sticks.forEach((stick) => {
		sum += stick;
		if (maxLength < stick) maxLength = stick;
	});

	if (sum - maxLength <= maxLength) return 'NO';

	return 'YES';
}

for (let i = 1; i <= testCase; i++) {
	let sticks = input[i].split(' ').map(Number);
	console.log(solution(sticks));
}
