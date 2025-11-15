function solution(board) {
	let [N, M] = [board.length, board[0].length];
	let new_board = [Array(M + 1).fill(0)];
	new_board.push(...board.map((row) => [0, ...row]));

	let dp = Array.from({ length: N + 1 }, () => Array(M + 1).fill(0));

	let maxSide = 0;
	for (let i = 1; i <= N; i++) {
		for (let j = 1; j <= M; j++) {
			if (new_board[i][j] === 1) {
				dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
				maxSide = Math.max(maxSide, dp[i][j]);
			}
		}
	}

	return maxSide * maxSide;
}