import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

function solution(n, arr) {
	let answer = [];
	answer.push(arr[0]);

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > arr[i - 1]) answer.push(arr[i]);
	}

	return answer.join(' ');
}

for (let i = 1; i <= testCase; i++) {
	let n = Number(input[i * 2 - 1]);
	let numbers = input[i * 2].split(' ').map(Number);
	console.log(solution(n, numbers));
}
