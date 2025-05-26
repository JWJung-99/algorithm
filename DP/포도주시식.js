import fs from "fs";
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const n = Number(input[0]);
let wine = [];

for (let i = 1; i <= n; i++) {
  wine.push(Number(input[i]));
}

let dp = Array(n).fill(0);

dp[0] = wine[0];
dp[1] = wine[0] + wine[1];
dp[2] = Math.max(wine[2] + wine[1], wine[2] + dp[0], wine[1] + wine[0]);

for (let i = 3; i < n; i++) {
  dp[i] = Math.max(
    dp[i - 1],
    wine[i] + wine[i - 1] + dp[i - 3],
    wine[i] + dp[i - 2]
  );
}

console.log(dp[n - 1]);
