let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let testCase = Number(input[0]);
let line = 1;

let dx = [-2, -2, -1, -1, 1, 1, 2, 2];
let dy = [-1, 1, -2, 2, -2, 2, -1, 1];

while (testCase--) {
	let I = Number(input[line]);
	let [X, Y] = input[line + 1].split(' ').map(Number);
	let [tarX, tarY] = input[line + 2].split(' ').map(Number);

	let visited = Array.from({ length: I }, () => Array(I).fill(0));
	let queue = [[X, Y]];

	while (queue.length) {
		let [curX, curY] = queue.shift();

		if (curX === tarX && curY === tarY) break;

		for (let i = 0; i < 8; i++) {
			let nextX = curX + dx[i];
			let nextY = curY + dy[i];

			if (nextX < 0 || nextX >= I || nextY < 0 || nextY >= I) continue;

			if (visited[nextX][nextY] === 0) {
				visited[nextX][nextY] = visited[curX][curY] + 1;
				queue.push([nextX, nextY]);
			}
		}
	}

	console.log(visited[tarX][tarY]);

	line += 3;
}