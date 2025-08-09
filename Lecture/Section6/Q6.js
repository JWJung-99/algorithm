import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

function solution(n, k) {
	let arr = Array.from({ length: n }, (_, i) => i + 1);

	while (arr.length > 1) {
		for (let i = 0; i < k - 1; i++) arr.push(arr.shift());
		arr.shift();
	}

	return arr[0];
}

for (let i = 1; i <= testCase; i++) {
	const [n, k] = input[i].split(' ').map(Number);
	console.log(solution(n, k));
}
