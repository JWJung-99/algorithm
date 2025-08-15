import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

/**
 *
 * @param {number} N
 * @param {number} M
 * @param {number[]} arr
 * @returns {number}
 */
function solution(N, M, arr) {
	let answer = 0;
	let p1 = 0;
	let sum = 0;

	for (let i = 0; i < N; i++) {
		sum += arr[i];

		while (sum > M) {
			sum -= arr[p1++];
		}

		answer += i - p1 + 1;
	}

	return answer;
}

let index = 1;
while (testCase > 0) {
	let [N, M] = input[index].split(' ').map(Number);
	let arr = input[index + 1].split(' ').map(Number);

	console.log(solution(N, M, arr));

	testCase--;
	index += 2;
}
