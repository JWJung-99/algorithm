function solution(board, skill) {
	const N = board.length;
	const M = board[0].length;
	let diff = Array.from({ length: N + 1 }, () => Array(M + 1).fill(0));

	for (let [type, r1, c1, r2, c2, degree] of skill) {
		const d = type === 1 ? -1 * degree : degree;

		diff[r1][c1] += d;
		diff[r1][c2 + 1] -= d; // 가로 경계
		diff[r2 + 1][c1] -= d; // 세로 경계
		diff[r2 + 1][c2 + 1] += d; // 2번 적용되므로 중복 제거
	}

	// 가로 누적
	for (let i = 0; i <= N; i++) {
		for (let j = 1; j <= M; j++) {
			diff[i][j] += diff[i][j - 1];
		}
	}

	// 세로 누적
	for (let i = 1; i <= N; i++) {
		for (let j = 0; j <= M; j++) {
			diff[i][j] += diff[i - 1][j];
		}
	}

	let answer = 0;
	for (let i = 0; i < N; i++) {
		for (let j = 0; j < M; j++) {
			if (board[i][j] + diff[i][j] > 0) answer++;
		}
	}

	return answer;
}