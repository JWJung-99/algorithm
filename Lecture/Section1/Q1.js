import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let numbers = input[0].split(' ').map(Number);

function solution(nums) {
	let minNum = 100;

	nums.forEach((num) => {
		if (minNum >= num) minNum = num;
	});

	return minNum;
}

console.log(solution(numbers));
