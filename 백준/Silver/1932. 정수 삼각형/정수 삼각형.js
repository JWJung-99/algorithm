let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);

let pyramid = [];

for (let i = 1; i <= n; i++) {
  pyramid.push(input[i].split(" ").map(Number));
}

let dp = [];
for (let i = 1; i <= n; i++) {
  dp.push(Array(i).fill(0));
}

dp[0][0] = pyramid[0][0];

if (n > 1) {
  dp[1][0] = dp[0][0] + pyramid[1][0];
  dp[1][1] = dp[0][0] + pyramid[1][1];

  for (let i = 2; i < n; i++) {
    dp[i][0] = dp[i - 1][0] + pyramid[i][0];
    dp[i][i] = dp[i - 1][i - 1] + pyramid[i][i];

    for (let j = 1; j < i; j++) {
      dp[i][j] = Math.max(dp[i - 1][j - 1], dp[i - 1][j]) + pyramid[i][j];
    }
  }
}

console.log(Math.max(...dp[n - 1]));