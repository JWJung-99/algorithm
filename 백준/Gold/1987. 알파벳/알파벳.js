let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [R, C] = input[0].split(' ').map(Number);
let board = [];
for (let i = 1; i <= R; i++) {
	board.push(input[i].split(''));
}

let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];

let answer = 0;
let records = new Set(board[0][0]);

function DFS(n, curX, curY) {
	answer = Math.max(answer, n);

	for (let i = 0; i < 4; i++) {
		let nextX = curX + dx[i];
		let nextY = curY + dy[i];

		if (nextX < 0 || nextX >= R || nextY < 0 || nextY >= C) continue;
		if (!records.has(board[nextX][nextY])) {
			records.add(board[nextX][nextY]);
			DFS(n + 1, nextX, nextY);
			records.delete(board[nextX][nextY]);
		}
	}
}

DFS(1, 0, 0);
console.log(answer);