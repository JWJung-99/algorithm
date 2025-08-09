import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

function solution(m, arr) {
	let p1 = 0;
	let answer = 0;
	let sum = 0;

	for (let p2 = 0; p2 < arr.length; p2++) {
		sum += arr[p2];
		if (sum === m) answer++;

		while (sum >= m) {
			sum -= arr[p1];
			if (sum === m) answer++;
			p1++;
		}
	}

	return answer;
}

for (let i = 1; i <= testCase; i++) {
	const [n, m] = input[i * 2 - 1].split(' ').map(Number);
	const arr = input[i * 2].split(' ').map(Number);
	console.log(solution(m, arr));
}
