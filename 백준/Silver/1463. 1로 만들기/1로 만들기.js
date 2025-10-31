let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let N = Number(input[0]);

let dp = Array(N + 1).fill(0);
dp[1] = 0;

for (let i = 2; i <= N; i++) {
	// 1. -1 빼기
	dp[i] = dp[i - 1] + 1;

	// 2. 3으로 나누기
	if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[parseInt(i / 3)] + 1);

	// 3. 2로 나누기
	if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[parseInt(i / 2)] + 1);
}

console.log(dp[N]);