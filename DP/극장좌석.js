import fs from "fs";
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);
const M = Number(input[1]);

const dp = Array(N + 1).fill(0);
dp[0] = 1;
dp[1] = 1;

function DP(x) {
  if (dp[x] !== 0) return dp[x];
  dp[x] = DP(x - 1) + DP(x - 2);
  return dp[x];
}

const arr = [];
let start = 0;
for (let i = 2; i < M + 2; i++) {
  const vip = Number(input[i]);
  arr.push(vip - start - 1);
  start = vip;
}
arr.push(N - start);

let answer = 1;
arr.forEach((item) => {
  answer *= DP(item);
});

console.log(answer);
