import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

/**
 *
 * @param {number} N
 * @param {number} K
 * @param {number[]} arr
 * @returns {number}
 */
function solution(N, K, arr) {
	let answer = 0;

	let sum = 0;
	for (let j = 0; j < K; j++) {
		sum += arr[j];
	}
	answer = sum;

	for (let i = K; i < N; i++) {
		sum += arr[i] - arr[i - K];

		answer = Math.max(answer, sum);
	}

	return answer;
}

let index = 1;
while (testCase > 0) {
	const [N, K] = input[index].split(' ').map(Number);
	const arr = input[index + 1].split(' ').map(Number);

	console.log(solution(N, K, arr));

	testCase--;
	index += 2;
}
