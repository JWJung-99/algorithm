import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

/**
 * @description [DFS] 섬나라 아일랜드에 몇 개의 섬이 있는지 구하는 프로그램 작성
 * @param {number} N
 * @param {number[][]} map
 * @returns {number}
 */
function solution(N, map) {
	let answer = 0;

	let dx = [1, 0, -1, 0, 1, 1, -1, -1];
	let dy = [0, 1, 0, -1, 1, -1, 1, -1];

	// 섬을 발견하면 연결된 섬을 모두 0으로 변경하고 종료
	function DFS(x, y) {
		// 방문한 섬은 0으로 변경
		map[x][y] = 0;

		for (let i = 0; i < 8; i++) {
			let nx = x + dx[i];
			let ny = y + dy[i];

			if (nx >= 0 && nx < N && ny >= 0 && ny < N && map[nx][ny] === 1)
				DFS(nx, ny);
		}
	}

	for (let i = 0; i < N; i++) {
		for (let j = 0; j < N; j++) {
			if (map[i][j] === 1) {
				answer++;
				DFS(i, j);
			}
		}
	}

	return answer;
}

let index = 1;
while (testCase > 0) {
	const N = Number(input[index]);
	let map = [];
	for (let i = index + 1; i <= index + N; i++) {
		map.push(input[i].split(' ').map(Number));
	}
	console.log(solution(N, map));

	testCase--;
	index += N + 1;
}
