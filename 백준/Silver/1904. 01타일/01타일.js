let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let N = Number(input[0]);

let dp = Array(100001).fill(0);

dp[1] = 1;
dp[2] = 2;

for (let i = 3; i <= N; i++) {
	dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
}

console.log(dp[N]);