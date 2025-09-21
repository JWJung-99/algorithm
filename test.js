function solution(land) {
	let result = [];
	let N = land.length;
	let visited = Array.from({ length: N }, () => Array(4).fill(false));

	function DFS(n, sum) {
		if (n >= N) {
			result.push(sum);
			return;
		} else {
			for (let i = 0; i < 4; i++) {
				if (n > 0 && visited[n - 1][i] === true) continue;

				visited[n][i] = true;
				DFS(n + 1, sum + land[n][i]);
				visited[n][i] = false;
			}
		}
	}

	DFS(0, 0);

	return Math.max(...result);
}

console.log(
	solution([
		[1, 2, 3, 5],
		[5, 6, 7, 8],
		[4, 3, 2, 1],
	])
);
