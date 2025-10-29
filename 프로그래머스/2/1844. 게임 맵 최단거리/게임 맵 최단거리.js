function solution(maps) {
	let N = maps.length;
	let M = maps[0].length;

	let distance = Array.from({ length: N }, () => Array(M).fill(-1));
	distance[0][0] = 1;

	let dx = [-1, 0, 1, 0];
	let dy = [0, -1, 0, 1];

	let queue = [[0, 0]];
	while (queue.length) {
		let [curX, curY] = queue.shift();

		for (let i = 0; i < 4; i++) {
			let nextX = curX + dx[i];
			let nextY = curY + dy[i];

			if (
				nextX < 0 ||
				nextX >= N ||
				nextY < 0 ||
				nextY >= M ||
				maps[nextX][nextY] === 0
			)
				continue;

			if (distance[nextX][nextY] === -1) {
				distance[nextX][nextY] = distance[curX][curY] + 1;
				queue.push([nextX, nextY]);
			}
		}
	}

	return distance[N - 1][M - 1];
}