let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let T = Number(input[0]);
let index = 1;

while (T > 0) {
  const N = Number(input[index]);

  let dp = Array(N).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 1;

  for (let i = 3; i < N; i++) {
    dp[i] = dp[i - 2] + dp[i - 3];
  }

  console.log(dp[N - 1]);

  index += 1;
  T--;
}