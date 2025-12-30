function solution(storage, requests) {
	let [n, m] = [storage.length, storage[0].length];

	// storage를 바깥 공기로 감싸는 maps 배열 생성
	let maps = Array.from({ length: n + 2 }, () => Array(m + 2).fill(''));
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			maps[i + 1][j + 1] = storage[i][j];
		}
	}

	let dx = [-1, 0, 1, 0];
	let dy = [0, -1, 0, 1];

	// 바깥 공기를 true, 내부를 false로 나타내는 배열을 반환하는 함수
	function getOutside() {
		let visited = Array.from({ length: n + 2 }, () => Array(m + 2).fill(false));
		let queue = [[0, 0]];
		visited[0][0] = true;

		while (queue.length) {
			let [cX, cY] = queue.shift();

			for (let i = 0; i < 4; i++) {
				let [nX, nY] = [cX + dx[i], cY + dy[i]];

				if (
					nX >= 0 &&
					nX < n + 2 &&
					nY >= 0 &&
					nY < m + 2 &&
					!visited[nX][nY] &&
					maps[nX][nY] === ''
				) {
					visited[nX][nY] = true;
					queue.push([nX, nY]);
				}
			}
		}

		return visited;
	}

	for (let request of requests) {
		let alphabet = request[0];

		// 크레인을 이용해 모든 목표 컨테이너 제거
		if (request.length === 2) {
			for (let i = 1; i <= n; i++) {
				for (let j = 1; j <= m; j++) {
					if (maps[i][j] === alphabet) maps[i][j] = '';
				}
			}
		}
		// 지게차를 이용해 바깥 공기와 맞닿아 있는 목표 컨테이너만 제거
		else {
			let outside = getOutside();
			let toRemove = [];

			for (let i = 1; i <= n; i++) {
				for (let j = 1; j <= m; j++) {
					if (maps[i][j] !== alphabet) continue;

					for (let k = 0; k < 4; k++) {
						let [nX, nY] = [i + dx[k], j + dy[k]];

						// 바깥 공기와 맞닿아 있다면 제거
						if (outside[nX][nY]) {
							toRemove.push([i, j]);
							break;
						}
					}
				}
			}

			for (let [x, y] of toRemove) {
				maps[x][y] = '';
			}
		}
	}

	let answer = 0;
	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= m; j++) {
			if (maps[i][j] !== '') answer += 1;
		}
	}

	return answer;
}