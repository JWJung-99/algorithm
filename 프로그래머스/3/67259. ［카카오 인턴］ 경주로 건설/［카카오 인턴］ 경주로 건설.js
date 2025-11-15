function solution(board) {
	let N = board.length;

	let result = Array.from({ length: N }, () =>
		Array.from({ length: N }, () => Array(4).fill(1e9))
	);

	// d = [상, 하, 좌, 우]
	let dx = [-1, 1, 0, 0];
	let dy = [0, 0, -1, 1];

	let queue = [];
	queue.push([0, 0, 1, 0], [0, 0, 3, 0]);

	while (queue.length) {
		let [curX, curY, curDir, curCost] = queue.shift();

		for (let i = 0; i < 4; i++) {
			let [nextX, nextY] = [curX + dx[i], curY + dy[i]];

			if (
				nextX < 0 ||
				nextX >= N ||
				nextY < 0 ||
				nextY >= N ||
				board[nextX][nextY] === 1
			)
				continue;

			const newCost = curCost + (curDir === i ? 100 : 600);

			if (newCost < result[nextX][nextY][i]) {
				result[nextX][nextY][i] = newCost;
				queue.push([nextX, nextY, i, newCost]);
			}
		}
	}

	return Math.min(...result[N - 1][N - 1]);
}
