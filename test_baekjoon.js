import fs from 'fs';
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let N = Number(input[0]);
let K = Number(input[1]);

let start = 1;
let end = N * N;
let answer = 0;

while (start <= end) {
	let mid = parseInt((start + end) / 2);

	let cnt = 0;
	for (let i = 1; i <= N; i++) {
		cnt += Math.min(parseInt(mid / i), N);
	}

	if (cnt >= K) {
		answer = mid;
		end = mid - 1;
	} else start = mid + 1;
}

console.log(answer);
