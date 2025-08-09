import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

function isPrime(n) {
	for (let i = 2; i <= parseInt(Math.sqrt(n)); i++) {
		if (n % i === 0) return false;
	}

	return n > 1;
}

function solution(arr) {
	let answer = [];

	arr.forEach((number) => {
		const reversedNum = Number(number.split('').reverse().join(''));
		if (isPrime(reversedNum)) answer.push(reversedNum);
	});

	return answer.join(' ');
}

for (let i = 1; i <= testCase; i++) {
	const numbers = input[i].split(' ');
	console.log(solution(numbers));
}
