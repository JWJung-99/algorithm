let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let N = Number(input[0]);
let numbers = [];
for (let i = 1; i <= N; i++) {
	numbers.push(Number(input[i]));
}

let dp = Array(N).fill(0);
dp[0] = numbers[0];
for (let i = 1; i < N; i++) {
	dp[i] = Math.max(dp[i - 1] * numbers[i], numbers[i]);
}

console.log(Math.max(...dp).toFixed(3));