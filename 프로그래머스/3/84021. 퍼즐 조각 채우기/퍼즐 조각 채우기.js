function solution(game_board, table) {
	let N = game_board.length;

	let dx = [-1, 0, 1, 0];
	let dy = [0, -1, 0, 1];

	// 0. 위치 조정: 기준점 (0, 0)
	function toStartingPoint(block) {
		let minX = Math.min(...block.map((item) => item[0]));
		let minY = Math.min(...block.map((item) => item[1]));

		return block.map(([x, y]) => [x - minX, y - minY]).sort();
	}

	// 1. 블록 찾기
	let blocks = [];
	let visited_table = Array.from({ length: N }, () => Array(N).fill(false));

	function BFS_table(x, y) {
		let result = [[x, y]];
		visited_table[x][y] = true;

		let queue = [[x, y]];

		while (queue.length) {
			let [curX, curY] = queue.shift();

			for (let i = 0; i < 4; i++) {
				let nextX = curX + dx[i];
				let nextY = curY + dy[i];

				if (
					nextX < 0 ||
					nextX >= N ||
					nextY < 0 ||
					nextY >= N ||
					visited_table[nextX][nextY]
				)
					continue;

				if (table[nextX][nextY] === 1) {
					visited_table[nextX][nextY] = true;
					result.push([nextX, nextY]);
					queue.push([nextX, nextY]);
				}
			}
		}

		return toStartingPoint(result);
	}

	for (let i = 0; i < N; i++) {
		for (let j = 0; j < N; j++) {
			if (!visited_table[i][j] && table[i][j] === 1) {
				blocks.push(BFS_table(i, j));
			}
		}
	}

	// 2. 블록 회전
	function rotateBlock(block) {
		const rotatedBlock = block.map(([x, y]) => [y, -x]);

		return toStartingPoint(rotatedBlock);
	}

	// 3. 빈칸 찾기
	let blanks = [];
	let visited_board = Array.from({ length: N }, () => Array(N).fill(false));

	function BFS_board(x, y) {
		let result = [[x, y]];
		visited_board[x][y] = true;

		let queue = [[x, y]];

		while (queue.length) {
			let [curX, curY] = queue.shift();

			for (let i = 0; i < 4; i++) {
				let nextX = curX + dx[i];
				let nextY = curY + dy[i];

				if (
					nextX < 0 ||
					nextX >= N ||
					nextY < 0 ||
					nextY >= N ||
					visited_board[nextX][nextY]
				)
					continue;

				if (game_board[nextX][nextY] === 0) {
					visited_board[nextX][nextY] = true;
					result.push([nextX, nextY]);
					queue.push([nextX, nextY]);
				}
			}
		}

		return toStartingPoint(result);
	}

	for (let i = 0; i < N; i++) {
		for (let j = 0; j < N; j++) {
			if (!visited_board[i][j] && game_board[i][j] === 0) {
				blanks.push(BFS_board(i, j));
			}
		}
	}

	// 4. 빈칸 채우기
	let answer = 0;
	for (let block of blocks) {
		for (let index = 0; index < blanks.length; index++) {
			let match = false;

			for (let i = 0; i < 4; i++) {
				block = rotateBlock(block);
				if (JSON.stringify(block) === JSON.stringify(blanks[index])) {
					answer += block.length;
					blanks.splice(index, 1);
					match = true;
					break;
				}
			}

			if (match) break;
		}
	}
	return answer;
}