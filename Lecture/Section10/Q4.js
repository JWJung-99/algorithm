import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

/**
 * @description [냅색] 여러 단위의 동전들이 주어져 있을 때 거슬러 줄 동전의 최소개수
 * @param {number[]} coins
 * @param {number} M
 * @returns {number}
 */
function solution(coins, M) {
	let dp = Array(M + 1).fill(500);
	dp[0] = 0;

	for (let coin of coins) {
		for (let i = coin; i <= M; i++) {
			dp[i] = Math.min(dp[i - coin] + 1, dp[i]);
		}
	}

	return dp[M];
}

let index = 1;
while (testCase > 0) {
	const coins = input[index + 1].split(' ').map(Number);
	const M = Number(input[index + 2]);
	console.log(solution(coins, M));

	testCase--;
	index += 3;
}
