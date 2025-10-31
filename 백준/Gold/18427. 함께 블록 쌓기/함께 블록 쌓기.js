let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, M, H] = input[0].split(' ').map(Number);
let dp = Array.from({ length: N + 1 }, () => Array(H + 1).fill(0));
dp[0][0] = 1;

for (let i = 1; i <= N; i++) {
	let blocks = input[i].split(' ').map(Number);
	dp[i][0] = 1;

	for (let j = 1; j <= H; j++) {
		for (let block of blocks) {
			if (j >= block) {
				dp[i][j] += dp[i - 1][j - block];
				dp[i][j] %= 10007;
			}
		}
		dp[i][j] += dp[i - 1][j];
		dp[i][j] %= 10007;
	}
}

console.log(dp[N][H]);