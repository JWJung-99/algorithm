function solution(maps) {
	let N = maps.length;
	let M = maps[0].length;

	let [startX, startY] = [0, 0];
	let [leverX, leverY] = [0, 0];
	let [endX, endY] = [0, 0];

	maps = maps.map((elem) => elem.split(''));

	for (let i = 0; i < N; i++) {
		for (let j = 0; j < M; j++) {
			if (maps[i][j] === 'S') [startX, startY] = [i, j];
			else if (maps[i][j] === 'L') [leverX, leverY] = [i, j];
			else if (maps[i][j] === 'E') [endX, endY] = [i, j];
		}
	}

	function BFS(sX, sY, tX, tY) {
		let dx = [-1, 0, 1, 0];
		let dy = [0, -1, 0, 1];
		let visited = Array.from({ length: N }, () => Array(M).fill(false));

		visited[sX][sY] = true;
		let queue = [[sX, sY, 0]];

		while (queue.length) {
			let [curX, curY, curTime] = queue.shift();

			if (curX === tX && curY === tY) return curTime;

			for (let i = 0; i < 4; i++) {
				let [nextX, nextY] = [curX + dx[i], curY + dy[i]];

				if (nextX < 0 || nextX >= N || nextY < 0 || nextY >= M) continue;
				if (visited[nextX][nextY] || maps[nextX][nextY] === 'X') continue;

				visited[nextX][nextY] = true;
				queue.push([nextX, nextY, curTime + 1]);
			}
		}
	}

	let fromStartToLever = BFS(startX, startY, leverX, leverY);
	let fromLeverToEnd = BFS(leverX, leverY, endX, endY);

	if (fromStartToLever && fromLeverToEnd)
		return fromStartToLever + fromLeverToEnd;
	else return -1;
}