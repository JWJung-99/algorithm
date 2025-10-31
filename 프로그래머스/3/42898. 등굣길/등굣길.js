function solution(m, n, puddles) {
	let map = Array.from({ length: m }, () => Array(n).fill(0));

	for (let [x, y] of puddles) map[x - 1][y - 1] = -1;
	map[0][0] = 1;

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (map[i][j] === -1) continue;

			if (i > 0 && map[i - 1][j] > 0) map[i][j] += map[i - 1][j] % 1000000007;
			if (j > 0 && map[i][j - 1] > 0) map[i][j] += map[i][j - 1] % 1000000007;
		}
	}

	return map[m - 1][n - 1] % 1000000007;
}