import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

function getSum(str) {
	return str
		.split('')
		.map(Number)
		.reduce((acc, cur) => acc + cur);
}

function solution(arr) {
	let maxNum = Number(arr[0]);
	let maxResult = getSum(arr[0]);

	for (let i = 1; i < arr.length; i++) {
		if (getSum(arr[i]) > maxResult) {
			maxResult = getSum(arr[i]);
			maxNum = Number(arr[i]);
		} else if (getSum(arr[i]) === maxResult) {
			maxNum = Math.max(Number(arr[i]), maxNum);
		}
	}

	return maxNum;
}

for (let i = 1; i <= testCase; i++) {
	const arr = input[i].split(' ');
	console.log(solution(arr));
}
