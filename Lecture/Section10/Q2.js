import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

/**
 * @description 한 번에 한 칸 또는 두 칸씩 건너뛰면서 건널 때 N개의 돌다리를 건너는 방법의 수
 * @param {number} N
 * @returns {number}
 */
function solution(N) {
	let dp = Array(N + 1).fill(0);
	dp[1] = 1;
	dp[2] = 2;

	function count(n) {
		if (dp[n]) return dp[n];
		if (n === 1) return dp[1];
		if (n === 2) return dp[2];

		return (dp[n] = count(n - 1) + count(n - 2));
	}

	return count(N + 1);
}

let index = 1;
while (testCase > 0) {
	let N = Number(input[index]);
	console.log(solution(N));

	testCase--;
	index += 1;
}
