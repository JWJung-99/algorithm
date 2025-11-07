let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let N = Number(input[0]);
let num = input[1].split(' ').map(Number);

let p = [0];
for (let i = 0; i < N; i++) {
	p.push(num[i] + p[i]);
}

let M = Number(input[2]);
for (let i = 3; i <= M + 2; i++) {
	let [left, right] = input[i].split(' ').map(Number);
	console.log(p[right] - p[left - 1]);
}