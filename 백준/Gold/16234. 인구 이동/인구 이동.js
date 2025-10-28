let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, L, R] = input[0].split(' ').map(Number);
let maps = [];
for (let i = 1; i <= N; i++) {
	maps.push(input[i].split(' ').map(Number));
}

let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];

function BFS(x, y, index, union) {
	let united = [[x, y]];
	let queue = [[x, y]];
	union[x][y] = index;

	let sum = maps[x][y];
	let cnt = 1;

	while (queue.length) {
		let [curX, curY] = queue.shift();

		for (let i = 0; i < 4; i++) {
			let nextX = curX + dx[i];
			let nextY = curY + dy[i];

			if (nextX < 0 || nextX >= N || nextY < 0 || nextY >= N) continue;

			if (union[nextX][nextY] === -1) {
				let diff = Math.abs(maps[nextX][nextY] - maps[curX][curY]);
				if (diff >= L && diff <= R) {
					united.push([nextX, nextY]);
					sum += maps[nextX][nextY];
					cnt += 1;
					queue.push([nextX, nextY]);
					union[nextX][nextY] = index;
				}
			}
		}
	}

	for (let [i, j] of united) maps[i][j] = parseInt(sum / cnt);
}

let answer = 0;
while (true) {
	let union = Array.from({ length: N }, () => Array(N).fill(-1));
	let index = 0;
	for (let i = 0; i < N; i++) {
		for (let j = 0; j < N; j++) {
			if (union[i][j] === -1) {
				BFS(i, j, index, union);
				index++;
			}
		}
	}

	if (index === N * N) break;
	answer += 1;
}

console.log(answer);