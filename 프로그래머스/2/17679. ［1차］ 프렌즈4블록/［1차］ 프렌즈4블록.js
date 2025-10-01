function solution(m, n, board) {
	let answer = 0;
	let isFinished = false;
	board = board.map((_) => _.split(''));

	while (!isFinished) {
		let arr = [];

		// 1. [i, j] 기준 →,↓,↘︎ 방향의 원소를 체크
		for (let i = 0; i < m - 1; i++) {
			for (let j = 0; j < n - 1; j++) {
				if (board[i][j] === 0) continue;

				// 4개가 같다면 배열에 추가
				if (
					board[i][j] === board[i + 1][j] &&
					board[i][j] === board[i][j + 1] &&
					board[i][j] === board[i + 1][j + 1]
				) {
					arr.push([i, j], [i, j + 1], [i + 1, j], [i + 1, j + 1]);
				}
			}
		}

		// 2. 점수 계산 ⇒ 더 이상 깨질 것이 없으면 종료
        // 중복인 원소 제거
		arr = [...new Set(arr.map((_) => _.join(',')))].map((_) =>
			_.split(',').map(Number)
		);

		if (arr.length) answer += arr.length;
		else isFinished = true;

		// 3. board 업데이트
		// 3-1. arr를 돌면서 해당 위치를 0으로 변경
		for (let [i, j] of arr) {
			board[i][j] = 0;
		}

		// 3-2. 빈 공간 채우기
		for (let i = m - 1; i > 0; i--) {
			// 맨 아래 행부터 깨진 부분이 있는지 확인 ⇒ 없으면 pass
			if (!board[i].some((v) => !v)) continue;

			for (let j = 0; j < n; j++) {
				// 깨진 부분이 있는 열에서
				if (!board[i][j]) {
					// 위로 올라가면서 깨지지 않은 것을 하나 끌어내리기
					for (let k = i - 1; k >= 0; k--) {
						if (board[k][j]) {
							board[i][j] = board[k][j];
							board[k][j] = 0;
							break;
						}
					}
				}
			}
		}
	}

	return answer;
}