import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

function solution(arr1, arr2) {
	// 방법 1
	// let answer = [...arr1, ...arr2];
	// return answer.sort((a, b) => a - b).join(' ');

	// 방법 2
	let answer = [];

	let p1 = 0;
	let p2 = 0;
	let n = arr1.length;
	let m = arr2.length;

	while (p1 < n && p2 < m) {
		if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
		else answer.push(arr2[p2++]);
	}

	while (p1 < n) answer.push(arr1[p1++]);

	while (p2 < m) answer.push(arr2[p2++]);

	return answer.join(' ');
}

for (let i = 1; i <= testCase; i++) {
	const arr1 = input[i * 4 - 2].split(' ').map(Number);
	const arr2 = input[i * 4].split(' ').map(Number);
	console.log(solution(arr1, arr2));
}
