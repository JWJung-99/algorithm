import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

function solution(arr) {
	return Math.min(...arr);
}

for (let i = 1; i <= testCase; i++) {
	let arr = input[i].split(' ').map(Number);
	console.log(solution(arr));
}
