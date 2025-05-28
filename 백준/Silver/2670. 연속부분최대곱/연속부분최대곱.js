let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const dp = Array(N).fill(0);
dp[0] = Number(input[1]);

for (let i = 1; i < N; i++) {
  dp[i] = Math.max(Number(input[i + 1]), dp[i - 1] * Number(input[i + 1]));
}

console.log(Math.max(...dp).toFixed(3));