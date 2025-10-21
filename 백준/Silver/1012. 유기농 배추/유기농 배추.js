let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let testCase = Number(input[0]);
let index = 1;

while (testCase > 0) {
	let [M, N, K] = input[index].split(' ').map(Number);
	let field = Array.from({ length: N }, () => Array(M).fill(0));

	for (let i = index + 1; i <= index + K; i++) {
		let [c, r] = input[i].split(' ').map(Number);
		field[r][c] = 1;
	}

	let dx = [-1, 0, 1, 0];
	let dy = [0, 1, 0, -1];

	function DFS(x, y) {
		for (let i = 0; i < 4; i++) {
			let nextX = x + dx[i];
			let nextY = y + dy[i];

			if (nextX < 0 || nextX >= N || nextY < 0 || nextY >= M) continue;
			if (field[nextX][nextY] === 1) {
				field[nextX][nextY] = 0;
				DFS(nextX, nextY);
			}
		}
	}

	let answer = 0;
	for (let i = 0; i < N; i++) {
		for (let j = 0; j < M; j++) {
			if (field[i][j] === 1) {
				answer++;
				DFS(i, j);
			}
		}
	}

	console.log(answer);

	index += K + 1;
	testCase--;
}