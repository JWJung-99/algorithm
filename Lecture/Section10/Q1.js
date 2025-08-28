import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

/**
 * @description 한 번에 한 계단 또는 두 계단씩 올라갈 때, N개의 계단을 오르는 방법의 수
 * @param {number} n
 * @returns {number}
 */
function solution(n) {
	let dp = Array(n + 1).fill(0);
	dp[1] = 1;
	dp[2] = 2;

	function count(n) {
		if (dp[n]) return dp[n];
		if (n === 1) return dp[1];
		if (n === 2) return dp[2];

		return (dp[n] = count(n - 1) + count(n - 2));
	}

	return count(n);
}

let index = 1;
while (testCase > 0) {
	const n = Number(input[index]);
	console.log(solution(n));

	testCase--;
	index += 1;
}
