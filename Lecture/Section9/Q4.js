import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

/**
 * (1, 1)에서 (7, 7)까지 갈 수 있는 경우의 수 출력
 * @param {number[][]} graph 7*7 격자판의 정보
 * @returns {number}
 */
function solution(graph) {
	let answer = 0;

	// [상, 하, 좌, 우]
	let dx = [-1, 1, 0, 0];
	let dy = [0, 0, -1, 1];

	let path = [];

	function DFS(x, y) {
		if (x === 6 && y === 6) {
			answer++;
			console.log(path);
		} else {
			for (let i = 0; i < 4; i++) {
				let nextX = x + dx[i];
				let nextY = y + dy[i];

				if (
					nextX >= 0 &&
					nextX < 7 &&
					nextY >= 0 &&
					nextY < 7 &&
					graph[nextX][nextY] === 0
				) {
					graph[nextX][nextY] = 1;
					path.push([nextX + 1, nextY + 1]);
					DFS(nextX, nextY);
					path.pop();
					graph[nextX][nextY] = 0;
				}
			}
		}
	}

	graph[0][0] = 1;
	path.push([1, 1]);
	DFS(0, 0);

	return answer;
}

let index = 1;
while (testCase > 0) {
	const graph = [];

	for (let i = index; i < index + 7; i++) {
		graph.push(input[i].split(' ').map(Number));
	}

	console.log(solution(graph));

	testCase--;
	index += 7;
}
