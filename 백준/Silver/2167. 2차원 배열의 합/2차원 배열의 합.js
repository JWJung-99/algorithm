let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, M] = input[0].split(' ').map(Number);
let arr = [Array(M + 1).fill(0)];
for (let line = 1; line <= N; line++) {
	arr.push([0, ...input[line].split(' ').map(Number)]);
}

let sum = Array.from({ length: N + 1 }, () => Array(M + 1).fill(0));
for (let i = 1; i <= N; i++) {
	for (let j = 1; j <= M; j++) {
		sum[i][j] = arr[i][j] + sum[i][j - 1] + sum[i - 1][j] - sum[i - 1][j - 1];
	}
}

let K = Number(input[N + 1]);
for (let line = N + 2; line <= N + K + 1; line++) {
	let [i, j, x, y] = input[line].split(' ').map(Number);
	console.log(sum[x][y] - sum[x][j - 1] - sum[i - 1][y] + sum[i - 1][j - 1]);
}