function solution(board) {
	let rows = board.length;
	let cols = board[0].length;

	let map = [];
	let [rX, rY] = [0, 0];
	let [gX, gY] = [0, 0];

	for (let i = 0; i < rows; i++) {
		map.push(board[i].split(''));

		for (let j = 0; j < cols; j++) {
			if (board[i][j] === 'R') [rX, rY] = [i, j];
			if (board[i][j] === 'G') [gX, gY] = [i, j];
		}
	}

	let dx = [-1, 0, 1, 0];
	let dy = [0, -1, 0, 1];

	function BFS(x, y) {
		let visited = Array.from({ length: rows }, () => Array(cols).fill(false));
		visited[x][y] = true;
		let queue = [[x, y, 0]];

		while (queue.length) {
			let [curX, curY, cnt] = queue.shift();

			if (curX === gX && curY === gY) return cnt;

			for (let i = 0; i < 4; i++) {
				let [nextX, nextY] = [curX, curY];

				while (
					nextX >= 0 &&
					nextX < rows &&
					nextY >= 0 &&
					nextY < cols &&
					map[nextX][nextY] !== 'D'
				) {
					nextX += dx[i];
					nextY += dy[i];
				}

				nextX -= dx[i];
				nextY -= dy[i];

				if (
					nextX < 0 ||
					nextX >= rows ||
					nextY < 0 ||
					nextY >= cols ||
					visited[nextX][nextY]
				)
					continue;

				visited[nextX][nextY] = true;
				queue.push([nextX, nextY, cnt + 1]);
			}
		}
	}

	const result = BFS(rX, rY);

	return result ? result : -1;
}