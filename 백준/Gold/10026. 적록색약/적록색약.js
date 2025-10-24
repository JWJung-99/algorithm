let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let N = Number(input[0]);
let painting = [];
for (let i = 1; i <= N; i++) {
	painting.push(input[i].split(''));
}

let section = 0;
let sectionForWeakness = 0;

let visited = Array.from({ length: N }, () => Array(N).fill(false));

let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];

function DFS(x, y) {
	visited[x][y] = true;

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

		if (painting[nextX][nextY] === painting[x][y]) DFS(nextX, nextY);
	}
}

for (let i = 0; i < N; i++) {
	for (let j = 0; j < N; j++) {
		if (!visited[i][j]) {
			section++;
			DFS(i, j);
		}
	}
}

visited = Array.from({ length: N }, () => Array(N).fill(false));

for (let i = 0; i < N; i++) {
	for (let j = 0; j < N; j++) {
		if (painting[i][j] === 'G') painting[i][j] = 'R';
	}
}

for (let i = 0; i < N; i++) {
	for (let j = 0; j < N; j++) {
		if (!visited[i][j]) {
			sectionForWeakness++;
			DFS(i, j);
		}
	}
}

console.log(section, sectionForWeakness);