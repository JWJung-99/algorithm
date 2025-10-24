let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, M] = input[0].split(' ').map(Number);
let maps = [];
for (let i = 1; i <= N; i++) {
	maps.push(input[i].split(' ').map(Number));
}

let temp = Array.from({ length: N }, () => Array(M).fill(0));

let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];

let answer = 0;

function virus(x, y) {
	for (let i = 0; i < 4; i++) {
		let nextX = x + dx[i];
		let nextY = y + dy[i];

		if (nextX < 0 || nextX >= N || nextY < 0 || nextY >= M) continue;
		if (temp[nextX][nextY] === 0) {
			temp[nextX][nextY] = 2;
			virus(nextX, nextY);
		}
	}
}

function DFS(n) {
	if (n === 3) {
		for (let i = 0; i < N; i++) {
			for (let j = 0; j < M; j++) {
				temp[i][j] = maps[i][j];
			}
		}

		for (let i = 0; i < N; i++) {
			for (let j = 0; j < M; j++) {
				if (temp[i][j] === 2) virus(i, j);
			}
		}

		let sum = 0;
		for (let i = 0; i < N; i++) {
			for (let j = 0; j < M; j++) {
				if (temp[i][j] === 0) sum++;
			}
		}

		answer = Math.max(answer, sum);
	} else {
		for (let i = 0; i < N; i++) {
			for (let j = 0; j < M; j++) {
				if (maps[i][j] === 0) {
					maps[i][j] = 1;
					DFS(n + 1);
					maps[i][j] = 0;
				}
			}
		}
	}
}

DFS(0);
console.log(answer);