function solution(m, n, puddles) {
	let answer = 0;

	let graph = Array.from({ length: m }, () => Array(n).fill(1));

	// 물에 잠긴 지역 방문 방지
	for (let [x, y] of puddles) {
		graph[x - 1][y - 1] = 0;
	}

	let dx = [1, 0];
	let dy = [0, 1];
	let queue = [];

	// 출발 노드 방문 처리
	queue.push([0, 0, 0]);

	// BFS
	while (queue.length) {
		let [curX, curY, dist] = queue.shift();

		if (curX === m - 1 && curY === n - 1) answer++;

		for (let i = 0; i < 2; i++) {
			let nextX = curX + dx[i];
			let nextY = curY + dy[i];

			if (nextX > m - 1 || nextY > n - 1 || graph[nextX][nextY] === 0) continue;

			queue.push([nextX, nextY, dist + 1]);
		}
	}

	return answer;
}
