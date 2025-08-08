import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

function solution(arr) {
	let answer = 1;
	let maxHeight = arr[0];

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > maxHeight) {
			answer += 1;
			maxHeight = arr[i];
		}
	}

	return answer;
}

for (let i = 1; i <= testCase; i++) {
	let students = input[i].split(' ').map(Number);
	console.log(solution(students));
}
