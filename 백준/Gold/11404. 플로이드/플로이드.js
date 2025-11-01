let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const INF = 1e9;

let N = Number(input[0]);
let M = Number(input[1]);
let map = Array.from({ length: N + 1 }, () => Array(N + 1).fill(1e9));

for (let i = 1; i <= N; i++) {
	map[i][i] = 0;
}

for (let i = 2; i < M + 2; i++) {
	let [from, to, cost] = input[i].split(' ').map(Number);
	map[from][to] = Math.min(map[from][to], cost);
}

for (let k = 1; k <= N; k++) {
	for (let a = 1; a <= N; a++) {
		for (let b = 1; b <= N; b++) {
			let cost = map[a][k] + map[k][b];
			map[a][b] = Math.min(map[a][b], cost);
		}
	}
}

for (let i = 1; i <= N; i++) {
	for (let j = 1; j <= N; j++) {
		if (map[i][j] === INF) map[i][j] = 0;
	}
	console.log(map[i].slice(1).join(' '));
}
