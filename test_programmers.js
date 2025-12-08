function solution(n, coins) {
	let dp = [1, ...Array(n).fill(0)];

	for (let coin of coins) {
		for (let i = 1; i <= n; i++) {
			if (i >= coin) dp[i] += dp[i - coin] % 1000000007;
		}
	}

	return dp[n];
}

// console.log(solution());
console.log(solution(5, [1, 2, 5]));
