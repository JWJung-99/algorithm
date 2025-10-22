let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let N = Number(input[0]);
let map = [];
for (let i = 1; i <= N; i++) {
	map.push(input[i].split('').map(Number));
}

let visited = Array.from({ length: N }, () => Array(N).fill(false));

let cnt = 0;
let complex = [];

let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];

function DFS(x, y) {
	let total = 1;

	for (let i = 0; i < 4; i++) {
		let nextX = x + dx[i];
		let nextY = y + dy[i];

		if (
			nextX < 0 ||
			nextX >= N ||
			nextY < 0 ||
			nextY >= N ||
			visited[nextX][nextY]
		)
			continue;

		if (map[nextX][nextY] === 1) {
			visited[nextX][nextY] = true;
			total += DFS(nextX, nextY);
		}
	}

	return total;
}

for (let i = 0; i < N; i++) {
	for (let j = 0; j < N; j++) {
		if (map[i][j] === 1 && !visited[i][j]) {
			cnt++;
			visited[i][j] = true;
			complex.push(DFS(i, j));
		}
	}
}

console.log(cnt);
console.log(complex.sort((a, b) => a - b).join('\n'));
