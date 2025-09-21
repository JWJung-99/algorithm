// BFS 이용 풀이 --> 시간 초과
function solution1(x, y, n) {
	let visited = new Array(y + 1).fill(false);

	let queue = [[x, 0]];
	visited[x] = true;

	while (queue.length) {
		let [cur, cnt] = queue.shift();

		let nexts = [cur + n, cur * 2, cur * 3];

		for (let next of nexts) {
			if (next > y || visited[next]) continue;

			if (next === y) return cnt + 1;

			visited[next] = true;
			queue.push([next, cnt + 1]);
		}
	}

	return -1;
}

// DP 이용 풀이
function solution(x, y, n) {
	let dp = new Array(y + 1).fill(Infinity);
	dp[x] = 0;

	for (let i = x; i <= y; i++) {
		if (dp[i] === Infinity) continue;

		if (i + n <= y) dp[i + n] = Math.min(dp[i + n], dp[i] + 1);
		if (i * 2 <= y) dp[i * 2] = Math.min(dp[i * 2], dp[i] + 1);
		if (i * 3 <= y) dp[i * 3] = Math.min(dp[i * 3], dp[i] + 1);
	}

	return dp[y] === Infinity ? -1 : dp[y];
}
