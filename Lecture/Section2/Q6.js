import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

function solution(n, arr) {
	let answer = 0;

	let sum1 = 0;
	let sum2 = 0;

	// 행,열의 합
	for (let i = 0; i < n; i++) {
		sum1 = 0;
		sum2 = 0;

		for (let j = 0; j < n; j++) {
			sum1 += arr[i][j];
			sum2 += arr[j][i];
		}

		answer = Math.max(answer, sum1, sum2);
	}

	// 왼쪽 -> 오른쪽 대각선 합
	let sum3 = 0;
	let sum4 = 0;

	for (let i = 0; i < n; i++) {
		sum3 += arr[i][i];
		sum4 += arr[i][n - i - 1];
	}

	answer = Math.max(answer, sum3, sum4);

	return answer;
}

for (let i = 1; i <= testCase; i++) {
	const n = Number(input[i]);
	const graph = [];

	for (let j = i + 1; j <= i + n; j++) {
		graph.push(input[j].split(' ').map(Number));
	}

	console.log(solution(n, graph));
}
