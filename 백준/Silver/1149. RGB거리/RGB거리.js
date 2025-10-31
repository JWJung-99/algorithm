let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let N = Number(input[0]);

let paints = [];
for (let i = 1; i <= N; i++) {
	paints.push(input[i].split(' ').map(Number));
}

let dp = Array.from({ length: N }, () => Array(3).fill(1000000));

for (let i = 0; i < 3; i++) {
	dp[0][i] = paints[0][i];
}

for (let i = 1; i < N; i++) {
	for (let j = 0; j < 3; j++) {
		for (let k = 0; k < 3; k++) {
			if (j === k) continue;
			dp[i][j] = Math.min(dp[i][j], dp[i - 1][k] + paints[i][j]);
		}
	}
}

console.log(Math.min(...dp[N - 1]));