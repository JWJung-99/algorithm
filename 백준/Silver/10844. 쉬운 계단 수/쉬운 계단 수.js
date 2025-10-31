let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let N = Number(input[0]);
let dp = Array.from({ length: N + 1 }, () => Array(10).fill(0));

for (let i = 1; i <= 9; i++) {
	dp[1][i] = 1;
}

for (let i = 2; i <= N; i++) {
	for (let j = 0; j <= 9; j++) {
		if (j > 0) dp[i][j] += dp[i - 1][j - 1];
		if (j < 9) dp[i][j] += dp[i - 1][j + 1];
		dp[i][j] %= Number(1e9);
	}
}

let answer = 0;
for (let x of dp[N]) {
	answer += x;
	answer %= Number(1e9);
}
console.log(answer);