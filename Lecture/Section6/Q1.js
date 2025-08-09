import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

function solution(arr) {
	let stack = [];

	for (let item of arr) {
		if (item === '(') stack.push(item);
		else {
			if (stack.length === 0) return 'NO';
			stack.pop();
		}
	}

	return stack.length === 0 ? 'YES' : 'NO';
}

for (let i = 1; i <= testCase; i++) {
	const arr = input[i].split('');
	console.log(arr);
	console.log(solution(arr));
}
