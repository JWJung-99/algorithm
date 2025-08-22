import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

/**
 * @description nCr = n-1Cr-1 + n-1Cr => 조합수 구하기(메모이제이션)
 * @param {number} n
 * @param {number} r
 * @returns {number}
 */
function solution(n, r) {
	let dp = Array.from(Array(n + 1), () => Array(r + 1).fill(0));

	function DFS(n, r) {
		if (dp[n][r] > 0) return dp[n][r];
		if (r === 0 || n === r) return 1;

		return (dp[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
	}

	return DFS(n, r);
}

let index = 1;
while (testCase > 0) {
	const [n, r] = input[index].split(' ').map(Number);
	console.log(solution(n, r));

	testCase--;
	index += 1;
}
