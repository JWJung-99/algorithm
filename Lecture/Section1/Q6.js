import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

function solution(arr) {
	let oddSum = 0;
	let oddMin = 100;

	arr.forEach((num) => {
		if (num % 2 !== 0) {
			oddSum += num;

			if (oddMin >= num) oddMin = num;
		}
	});

	return [oddSum, oddMin];
}

for (let i = 1; i <= testCase; i++) {
	let arr = input[i].split(' ').map(Number);
	const [sum, min] = solution(arr);
	console.log(sum);
	console.log(min);
}
