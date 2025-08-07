import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

function solution(num, arr) {
	let violated = 0;

	arr.forEach((car) => {
		if ((car - num) % 10 === 0) {
			violated += 1;
		}
	});

	return violated;
}

for (let i = 1; i <= testCase; i++) {
	let day = Number(input[i * 2 - 1]);
	let cars = input[i * 2].split(' ').map(Number);
	console.log(solution(day, cars));
}
