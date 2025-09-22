// 오른쪽/아래쪽으로만 이동 -> 경로가 이전 상태에 의존하기 때문에 DP 풀이가 적절!
function solution(m, n, puddles) {
	let dp = Array.from({ length: m }, () => Array(n).fill(0));
	dp[0][0] = 1;

	for (let [x, y] of puddles) dp[x - 1][y - 1] = -1;

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (i === 0 && j === 0) continue;
			if (dp[i][j] === -1) continue;

			if (i > 0 && dp[i - 1][j] > 0) dp[i][j] += dp[i - 1][j] % 1000000007;
			if (j > 0 && dp[i][j - 1] > 0) dp[i][j] += dp[i][j - 1] % 1000000007;
		}
	}

	return dp[m - 1][n - 1] % 1000000007;
}

// BFS 풀이 -> 시간 초과
function solution(m, n, puddles) {
	let answer = 0;

	let graph = Array.from({ length: m }, () => Array(n).fill(1));
	const ways = Array.from({ length: n }, () => Array(m).fill(0));

	// 물에 잠긴 지역 방문 방지
	for (let [x, y] of puddles) {
		graph[x - 1][y - 1] = 0;
	}

	let dx = [1, 0];
	let dy = [0, 1];
	let queue = [];

	// 출발 노드 방문 처리
	queue.push([0, 0]);
	ways[0][0] = 1;

	// BFS
	while (queue.length) {
		let [curX, curY] = queue.shift();

		for (let i = 0; i < 2; i++) {
			let nextX = curX + dx[i];
			let nextY = curY + dy[i];

			if (nextX > m - 1 || nextY > n - 1 || graph[nextX][nextY] === 0) continue;

			const prevWays = ways[nextX][nextY];
			ways[nextX][nextY] = (ways[nextX][nextY] + ways[curX][curY]) % 1000000007;

			if (prevWays === 0) {
				queue.push([nextX, nextY]);
			}
		}
	}

	return answer;
}
